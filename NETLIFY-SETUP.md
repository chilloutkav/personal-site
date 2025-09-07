# Netlify Environment Configuration

## Required Environment Variables

To resolve Netlify deprecation warnings and ensure optimal performance, the following environment variables must be configured in your Netlify dashboard:

### 1. Build Image Update (Critical - Deadline: January 1, 2026)

**Variable**: `BUILD_IMAGE`  
**Value**: `ubuntu-24.04-noble`  
**Purpose**: Upgrades from deprecated Ubuntu 20.04 Focal to modern Ubuntu 24.04 Noble Numbat

### 2. Functions Runtime Update (Critical - Already Past Due)

**Variable**: `AWS_LAMBDA_JS_RUNTIME`  
**Value**: `nodejs22.x`  
**Purpose**: Updates serverless functions from deprecated Node.js 16.x to match build Node.js 22

## Configuration Steps

### Via Netlify UI
1. Navigate to your site dashboard
2. Go to **Site settings** → **Environment variables**
3. Add the two variables listed above
4. **Deploy** your site to apply changes

### Via Netlify CLI
```bash
netlify env:set BUILD_IMAGE ubuntu-24.04-noble
netlify env:set AWS_LAMBDA_JS_RUNTIME nodejs22.x
netlify deploy --prod
```

### Via Netlify API
```bash
curl -X POST https://api.netlify.com/api/v1/sites/{site_id}/env \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{
    "key": "BUILD_IMAGE",
    "values": [{"value": "ubuntu-24.04-noble"}]
  }'
```

## Validation

After setting these variables and deploying:

1. **Check build logs** for Ubuntu 24.04 confirmation
2. **Test API endpoint** `/api/hello` - should report Node.js 22.x in `nodeVersion`
3. **Verify deprecation warnings are resolved** in Netlify dashboard

## Current Configuration

- **Build Node.js**: 22 LTS
- **Build Image**: Will be Ubuntu 24.04 Noble (after env var update)
- **Functions Runtime**: Will be Node.js 22.x (after env var update)
- **Next.js**: 15.5.2 with TypeScript + Tailwind CSS v4

## Benefits

✅ **Future-proof deployment** - No more deprecation warnings  
✅ **Performance improvements** - Latest Node.js 22 optimizations  
✅ **Security updates** - Modern Ubuntu 24.04 + Node.js 22 security patches  
✅ **Consistency** - Build and runtime environments aligned  

**Note**: These environment variables cannot be set in `netlify.toml` and must be configured via Netlify UI, CLI, or API.