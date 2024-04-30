## TaxGPT Demo

A cutting-edge tax assistance application built with the power of:

- **OpenAI API:** Leverages advanced large language models (LLMs) for tax-related question answering and guidance.
- **Next.js:** Provides a robust and performant React framework.
- **RAG (Retrieval-Augmented Generation):** Enables the app to reference relevant tax documentation and regulations for more informed responses.
- **Pinecone:** Offers a scalable vector database for efficient storage and retrieval of tax information.
- **Drizzle ORM:** Streamlines interaction with your database, simplifying data management.
- **Clerk/Next:** Secures user authentication and authorization seamlessly.

### Key Features

- **Intuitive Tax Q&A:** Users can ask complex tax questions and receive comprehensive, AI-powered answers.
- **Documentation Reference:** Provides supporting documentation and code citations for increased explainability.
- **Secure User Experience:** Protects user data and offers controlled access.

### Prerequisites

- Node.js and npm (or yarn)
- Accounts for:
  - OpenAI ([https://openai.com/](https://openai.com/))
  - Pinecone ([https://www.pinecone.io/](https://www.pinecone.io/))
  - Clerk ([https://clerk.dev/](https://clerk.dev/))

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/taxgpt-demo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd taxgpt-demo
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Configuration

1. Create a `.env.local` file in the root of your project.
2. Add the following environment variables, replacing placeholders with your actual credentials:

   ```
   NEXT_PUBLIC_CLERK_FRONTEND_API=...
   OPENAI_API_KEY=...
   PINECONE_API_KEY=...
   PINECONE_ENVIRONMENT=...
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open http://localhost:3000 in your web browser.

### Notes

- This project assumes you have a pre-populated Pinecone index containing relevant tax information.
- Consider adding comprehensive testing for enhanced robustness.

### Contributing

We welcome contributions! Feel free to open pull requests or issues for improvements or bug fixes.

### License

This project is licensed under the MIT License – see the LICENSE file for details.
