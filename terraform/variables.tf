# --- Authentication Variables ---
variable "cloudflare_email" {
  description = "Your Cloudflare Login Email"
  type        = string
}

variable "cloudflare_api_key" {
  description = "Your Global API Key (from My Profile > API Tokens)"
  type        = string
  sensitive   = true
}

variable "cloudflare_account_id" {
  description = "Your Cloudflare Account ID (from the URL bar)"
  type        = string
}

# --- Project Variables ---
variable "project_name" {
  description = "Base name for your resources"
  default     = "pearl-thoughts-task-nithin"
}

variable "github_owner" {
  description = "Your GitHub Username"
  default     = "Nithinsettibathula"
}

variable "github_repo" {
  description = "Your GitHub Repository Name"
  default     = "TASK-CLOUDFARE"
}