# Cloudflare Full-Stack Integration with Terraform

# Nithin Settibathula
A professional DevOps task demonstrating the deployment of a full-stack application using **Infrastructure as Code (IaC)**. This project integrates a **Cloudflare Workers** backend with a **Cloudflare Pages** frontend, managed entirely through modular Terraform configurations.

## 🚀 Live Demo
* **Frontend:** [https://pearl-thoughts-frontend-nithin.pages.dev](https://pearl-thoughts-frontend-nithin.pages.dev)
* **Backend API:** [https://pearl-thoughts-backend.nithinsettibathula1426.workers.dev](https://pearl-thoughts-backend.nithinsettibathula1426.workers.dev)

---

## 🏗️ Architecture Overview
This project follows a modular design to ensure scalability and maintainability.



* **Frontend**: Hosted on **Cloudflare Pages**, featuring a responsive UI that performs asynchronous fetches to the backend.
* **Backend**: A **Cloudflare Worker** acting as a serverless API, handling CORS and returning dynamic JSON data.
* **Infrastructure**: Fully automated using **Terraform**, leveraging modules to separate worker and pages logic.

---

## 🛠️ Tech Stack
* **Cloud Provider**: Cloudflare (Workers, Pages)
* **IaC Tool**: Terraform (v1.0+)
* **Language**: JavaScript (ES Modules)
* **CI/CD**: GitHub Integration with Cloudflare Pages

---
⚙️ Key Features Implemented

Modular Terraform: Used separate modules for backend and frontend to prevent code duplication.

CORS Management: Implemented manual CORS headers in the Worker script to allow secure requests from the Pages domain.

Automated Deployment: Linked GitHub repository to Cloudflare Pages via Terraform for automatic builds on push.

Environment Variables: Managed sensitive data (Account IDs/API Keys) using Terraform variables.

🚀 How to Deploy Locally

Clone the Repo:


git clone [https://github.com/Nithinsettibathula/TASK-CLOUDFARE.git](https://github.com/Nithinsettibathula/TASK-CLOUDFARE.git)

cd TASK-CLOUDFARE/terraform

Configure Variables:

Create a terraform.tfvars file and add your Cloudflare credentials:


Terraform

cloudflare_email      = "your-email@example.com"

cloudflare_api_key    = "your-global-api-key"

cloudflare_account_id = "your-account-id"

Initialize & Apply:



terraform init

terraform apply

## 📂 Project Structure
```text
MAIN-TASK-CLOUDFARE/
├── backend/            # Cloudflare Worker source code
│   └── src/index.js    # API Logic & CORS handling
├── frontend/           # Static website files
│   ├── index.html      # UI Structure
│   ├── script.js       # API Fetch Logic
│   └── styles.css      # Custom Styling
└── terraform/          # Infrastructure as Code
    ├── main.tf         # Root configuration
    ├── variables.tf    # Input variables
    ├── terraform.tfvars # Secrets (ignored in git)
    └── modules/        # Reusable Infrastructure Modules
        ├── pages/      # Pages Project Module
        └── worker/     # Workers Script Module





