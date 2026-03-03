output "pages_url" {
  value = "https://${cloudflare_pages_project.main.subdomain}"
}