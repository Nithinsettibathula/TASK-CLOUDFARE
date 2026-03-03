terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

resource "cloudflare_workers_script" "main" {
  account_id         = var.account_id
  name               = var.script_name
  content            = file("${path.module}/../../../backend/src/index.js")
  
  
  compatibility_date = "2024-01-01"
  
  
  module = true
}