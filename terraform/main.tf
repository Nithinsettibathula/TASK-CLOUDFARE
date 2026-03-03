module "worker" {
  source      = "./modules/worker"
  account_id  = var.cloudflare_account_id
  script_name = "pearl-thoughts-backend"
}

module "pages" {
  source        = "./modules/pages"
  account_id    = var.cloudflare_account_id
  project_name  = "pearl-thoughts-frontend-nithin"
  github_owner  = var.github_owner
  github_repo   = var.github_repo
}