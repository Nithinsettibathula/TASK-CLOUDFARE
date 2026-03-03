export default {
  async fetch(request, env, ctx) {
    
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*", 
      "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    
    const data = {
      status: "Success",
      message: "Hello from the Cloudflare Worker Backend!",
      timestamp: new Date().toISOString(),
      intern_name: "Nithin Settibathula",
      deployment_tool: "Terraform"
    };

    
    return new Response(JSON.stringify(data, null, 2), {
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders 
      },
    });
  },
};