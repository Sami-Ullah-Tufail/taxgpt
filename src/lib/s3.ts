import { PutObjectCommandOutput, S3 } from "@aws-sdk/client-s3";
import { uploadToS3 } from "../../lib/s3"; // Assuming the path to your s3 file

jest.mock("@aws-sdk/client-s3", () => {
  // Mock implementations for S3 and its methods
  const mockPutObject = jest.fn();
  const mockS3 = jest.fn(() => ({
    putObject: mockPutObject,
  }));
  return { S3: mockS3 };
});
describe("uploadToS3", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should upload a file to S3 and return the file key and name", async () => {
    // Prepare fake file data
    const mockFile = new File(["test content"], "test.txt", {
      type: "text/plain",
    });

    // Mock the response from S3.putObject
    const mockPutObjectResponse = { Key: "uploads/..." }; // Or another suitable response
    mockPutObject.mockResolvedValue(mockPutObjectResponse);

    // Call your function
    const result = await uploadToS3(mockFile);

    // Assertions
    expect(result).toEqual({
      file_key: expect.stringMatching(/^uploads\/\d+/), // Check for the pattern
      file_name: "test.txt",
    });
    expect(mockS3).toBeCalledWith({
      region: "eu-north-1",
      credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID!,
        secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY!,
      },
    });
    expect(mockPutObject).toHaveBeenCalledWith({
      Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
      Key: expect.stringMatching(/^uploads\/\d+/),
      Body: mockFile,
    });
  });

  it("should reject the promise if an error occurs during upload", async () => {
    const mockFile = new File(["test content"], "test.txt", {
      type: "text/plain",
    });
    const mockError = new Error("Upload failed");
    mockPutObject.mockRejectedValue(mockError);

    await expect(uploadToS3(mockFile)).rejects.toThrow(mockError);
  });
});
