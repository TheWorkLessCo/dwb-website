# Dallas Window Butler - Project Context

> Master context file for all Claude Code sessions. Covers the DWB website, n8n workflows, GoHighLevel integrations, and tools.

## Project Overview

- **Repo:** https://github.com/TheWorkLessCo/dwb-website
- **Stack:** Next.js 14, Tailwind CSS v4, shadcn/ui (50+ components)
- **Brand Colors:** Primary blue `#049bf2`, Navy `#00152e`
- **Font:** Poppins
- **Logo URL:** `https://dallaswindowbutler.b-cdn.net/DWB%20Logo%20transparent.png`
- **n8n Instance:** https://natetibbs.app.n8n.cloud

## Git Workflow & Worktrees

GitHub is authenticated via `gh auth`. This repo uses **git worktrees** for parallel agent work.

```
dwb-website/                    # main worktree (main branch)
dwb-website-feature-<name>/     # agent worktrees (feature branches)
```

**Creating a worktree for a new feature:**
```bash
cd ~/Development/dwb-website
git worktree add ../dwb-website-feature-<name> -b feature/<name>
```

**Merging back:**
```bash
cd ~/Development/dwb-website
git merge feature/<name>
git worktree remove ../dwb-website-feature-<name>
```

**Important:** Each worktree shares the same `.git` history. Never work on the same branch from two worktrees simultaneously.

## Dev Server

```bash
cd ~/Development/dwb-website  # or the worktree path
npm run dev
# Runs at http://localhost:3000
```

---

## Website: Key Files Reference

| File | Purpose |
|------|---------|
| `app/globals.css` | Design tokens, shadows, gradients, easing, accessibility |
| `app/layout.tsx` | Root layout with skip link and semantic main |
| `app/page.tsx` | Homepage with all sections |
| `components/ui/card.tsx` | Card with glass/elevated/subtle/ghost variants |
| `components/ui/button.tsx` | Button with micro-lift, brand variant, hover effects |
| `components/animate-on-scroll.tsx` | Scroll-triggered animation wrapper |
| `components/modern-faq.tsx` | FAQ accordion with glassmorphism and animations (home page) |
| `components/ServiceFAQ.tsx` | Service-specific FAQ with matching dynamic styling |
| `hooks/use-intersection-observer.ts` | Intersection Observer hook |
| `hooks/use-focus-trap.ts` | Focus trap hook for accessibility |
| `components/header.tsx` | Navigation with mobile menu + focus trap applied |
| `components/hero.tsx` | Homepage hero with video |
| `components/warranty-card.tsx` | Glassmorphism example |
| `components/transformation-framework.tsx` | 5-card methodology section |
| `components/ImageBridge.tsx` | Full-width image section |

## Website: UI/UX Status

**Design Maturity:** 6.5/10 (as of Jan 2025)

**Completed Improvements:**
- Design tokens (shadows, gradients, custom easing)
- Accessibility (skip link, prefers-reduced-motion, focus traps)
- Scroll animations (AnimateOnScroll + IntersectionObserver)
- Card variants (glass, elevated, subtle, ghost)
- Button upgrades (micro-lift, shadow transitions, brand variant)
- Glassmorphism FAQ sections
- Gradient utilities

**Next Up (Phase 3):**
- Glass Card variant on more components
- Skeleton loading states
- Bento grid layouts

---

## Tools Directory

| Path | Purpose |
|------|---------|
| `tools/seo/` | SEO audit CLI (crawler, analyzers, reporter, schema-generator) |
| `tools/butler-cam/` | Butler-Cam HTML template for photo documentation |
| `tools/fieldvise/` | FieldVise Tasker voice capture project (NFC-triggered) |

---

## N8n MCP Server Tools

The MCP server (configured in `.mcp.json`) provides access to 800+ n8n nodes and 2,700+ workflow templates.

### Node Discovery

| Tool | Purpose |
|------|---------|
| `search_nodes` | Find nodes by keyword. Use `source: 'community'\|'verified'` and `includeExamples: true` |
| `get_node` | Unified node info with detail levels (minimal, standard, full) and modes (info, docs, search_properties, versions) |

### Validation

| Tool | Purpose |
|------|---------|
| `validate_node` | Unified validation with modes (minimal, full) and profiles (runtime, ai-friendly, strict) |
| `validate_workflow` | Complete workflow validation |

### Workflow Management

| Tool | Purpose |
|------|---------|
| `n8n_create_workflow` | Create new workflows |
| `n8n_update_partial_workflow` | Incremental updates (17 operation types including `activateWorkflow`) |
| `n8n_validate_workflow` | Validate workflow by ID |
| `n8n_autofix_workflow` | Auto-fix common issues |
| `n8n_deploy_template` | Deploy template directly to n8n instance |
| `n8n_workflow_versions` | Version history and rollback |
| `n8n_test_workflow` | Test workflow execution |
| `n8n_executions` | Manage execution history |

### Templates & Guides

| Tool | Purpose |
|------|---------|
| `search_templates` | Four modes: keyword, by_nodes, by_task, by_metadata |
| `get_template` | Get complete template details |
| `tools_documentation` | Meta-documentation for all MCP tools |
| `ai_agents_guide` | AI agent workflow guidance |

## N8n Skills

Seven skills activate automatically based on context:

| Skill | Triggers On | Purpose |
|-------|-------------|---------|
| **n8n MCP Tools Expert** | Finding nodes, using tools | Guides effective use of MCP tools |
| **n8n Expression Syntax** | Expression questions | Correct `{{ }}` patterns, variable access |
| **n8n Workflow Patterns** | Building workflows | 5 proven patterns: webhook, HTTP API, database, AI, scheduled |
| **n8n Validation Expert** | Validation errors | Interpret errors, handle false positives, auto-fix |
| **n8n Node Configuration** | Configuring nodes | Operation-aware setup, property dependencies |
| **n8n Code JavaScript** | JS code nodes | Data access, `$helpers`, DateTime patterns |
| **n8n Code Python** | Python code nodes | Python implementation with limitation awareness |

## N8n Critical Warnings

- **Never edit production directly** - test, backup, validate first
- **Explicitly configure all parameters** - defaults cause most runtime failures
- **Webhook data location** - GHL data is under `$json.body`, not directly on `$json`

## Workflow Creation Process

1. Search templates (`search_templates` with `by_task` mode)
2. Discover nodes (`search_nodes` with `includeExamples: true`)
3. Get node docs (`get_node`)
4. Build workflow (`n8n_create_workflow` with explicit parameters)
5. Validate (`n8n_validate_workflow`)
6. Auto-fix if needed (`n8n_autofix_workflow`)
7. Test (`n8n_test_workflow`)
8. Activate (`n8n_update_partial_workflow` with `activateWorkflow`)

---

## GoHighLevel (GHL) Reference

### API Endpoints
- **v1 API Base**: `https://rest.gohighlevel.com/v1/`
- **v2 API Base**: `https://services.leadconnectorhq.com/`
- **Auth Header**: `Authorization: Bearer {JWT_TOKEN}`
- **Version Header**: `Version: 2021-07-28`

### GHL IDs (ALL CONFIRMED)

| Item | Value |
|---|---|
| **Location ID** | `9Kg5geu4xzsAgIVkpkA8` |
| **Form Domain** | `go.dallaswindowbutler.com` |
| **Existing Form URL** | `https://go.dallaswindowbutler.com/widget/form/Q3OHmmOUQeS4GEDnBSLV` |
| **Sales Process Pipeline ID** | `OuQUl0CmzSm8B5HUpQWq` |
| **New Lead Stage ID** | `fd864cd5-c0d6-4c32-8fdf-cc364386c1f8` |
| **GHL Credential (n8n)** | Header Auth account (ID: `SHtCSAqrkQ8vI9C5`) |

### Roofing Partner Companies

| Company Name | GHL Company Record ID |
|---|---|
| Spire Construction & Remodeling | `69840fb0195bffee3d566560` |
| SCI Roofing & Remodeling | `696ef7b21ff6001cf4493148` |
| Lansing Building Products | `68b7cde64f6b071f78bc8e84` |

### Pipeline Stages (Sales Process)

| Position | Stage Name | Stage ID |
|---|---|---|
| 0 | New Lead | `fd864cd5-c0d6-4c32-8fdf-cc364386c1f8` |
| 1 | Lead Contacted | `d5366c12-30be-442d-9883-a112da5d86ae` |
| 2 | Virtual Assessment | `418dd2cb-c82f-44da-8bde-8a645bc43afb` |
| 3 | In-Home Assessment | `1d9ccb3a-575d-4fd9-ba76-0faaefda563e` |
| 4 | Proposal Sent & Qualified | `697b6370-fb77-48e0-8674-f7784398ab1b` |
| 5 | Negotiation & Follow-up | `4a6316f5-6833-4995-a6d6-46d2ca210d2c` |
| 6 | Sold / Contract Signed | `5955c0dc-ccbd-4777-840d-b56eb059c430` |
| 7 | Manufacturer Order Placed | `3d60f81f-377e-4afd-bf30-53b6e390ba6a` |
| 8 | Lost / Not Ready | `3f7e226d-5243-4e1f-809b-bb94b33323cb` |

### Other Pipelines

| Pipeline Name | Pipeline ID |
|---|---|
| Onboarding | `YsFIrBgqeNrU4rxFPeBv` |
| Post Installation | `YzNKcbg6rg5V0UZGFcKg` |
| Installer | `pVZ2EmGZcZ9WpqQfBtaZ` |

### GHL Custom Fields (Created via API)

**Contact Custom Fields:**

| Field Name | Field Key | Data Type | GHL ID |
|---|---|---|---|
| Submitted By Company | `contact.submitted_by_company` | TEXT | `TO5GCUzKT9K5PXYpYDOW` |
| Submission Date | `contact.submission_date` | TEXT | `mmYVNX7iUeOJdoCxrgHH` |
| Property Details | `contact.property_details` | LARGE_TEXT | `cy2BIeIYkUWjovCdojuv` |

**Opportunity Custom Fields:**

| Field Name | Field Key | Data Type | GHL ID |
|---|---|---|---|
| Referring Company | `opportunity.referring_company` | TEXT | `Xa9Ka7CzLftsCtwG3Edi` |

### GHL Custom Fields API

```bash
GET /v1/custom-fields/
POST /v1/custom-fields/
# dataTypes: TEXT, LARGE_TEXT, NUMBER, MONETARY, DATE, CHECKBOX, DROPDOWN, RADIO, FILE_UPLOAD, SIGNATURE
```

### GHL Form Builder

**Standard Fields:** Full Name, First/Last Name, Email, Phone, Address, City, State, Zip, DOB, Company Name, Website

**Form Field Configuration:**
- Field Name = display label
- Unique Key = system identifier (locked after save)
- Required toggle, Placeholder text

### GHL + n8n Integration Pattern

```
[GHL Form] → [GHL Workflow Trigger] → [n8n Webhook] → [n8n Processing] → [n8n HTTP → GHL API]
```

**Webhook data location:** `$json.body` (not directly on `$json`)

```javascript
const payload = $input.first().json.body || $input.first().json;
```

### GHL Contact Update

```javascript
PUT https://rest.gohighlevel.com/v1/contacts/{contactId}
{ "customField": { "field_key": "value" } }
```

### GHL Contact Notes

```javascript
POST https://rest.gohighlevel.com/v1/contacts/{contactId}/notes
{ "body": "Note content here" }
```

### GHL API Token Scopes (tested)
- Contacts by ID: OK
- Pipelines with locationId: OK
- Custom Fields read/write: OK
- Companies search: NOT AUTHORIZED
- Users search: NOT AUTHORIZED
- Contacts listing: NEEDS locationId

---

## Project: Property Service Request System

Roofing partner property submission form system.

### Architecture

```
[New Company Created in GHL]
  -> GHL Company Workflow -> Webhook to n8n URL Generator -> Returns form URL

[Partner Submits Form]
  GHL Form (with company_id & company_name in URL params)
    -> GHL Trigger Workflow -> Webhook to n8n -> n8n processes via GHL API
```

### n8n Workflow: "Property Service Request Processor"
- **Workflow ID:** `J3lDmSxb7Dedj6KW`
- **Webhook URL:** `https://natetibbs.app.n8n.cloud/webhook/property-service-request`
- **Status:** ACTIVE

**Nodes:** Webhook -> Parse & Build Payloads -> GHL: Update Contact -> GHL: Add Tags -> GHL: Create Opportunity -> GHL: Add Submission Note -> Respond: Success

### n8n Workflow: "Company Form URL Generator"
- **Workflow ID:** `8yqlVmfi2UGnBhIz`
- **Webhook URL:** `https://natetibbs.app.n8n.cloud/webhook/company-url-generator`
- **Status:** ACTIVE

### URL Structure

```
https://go.dallaswindowbutler.com/widget/form/Q3OHmmOUQeS4GEDnBSLV?company_id={GHL_COMPANY_ID}&company_name={URL_ENCODED_NAME}
```

### Remaining GHL Manual Setup (Nate does in GHL UI)
- [ ] Configure GHL form with hidden fields for company_id and company_name
- [ ] Create GHL trigger workflow: Form Submitted -> Webhook POST + SMS + Email
- [ ] Create GHL Company workflow: Company Created -> Webhook POST to URL generator
- [ ] Test end-to-end with real form submission
- [ ] Distribute unique URLs to 3 existing roofing companies

---

## Project: Butler-Cam

Photo documentation system for vinyl window replacement and IGU glass repair jobs.

### System Overview
- **Before Inspection Form** -> AI summary to GHL contact notes
- **After Completion Form** -> Side-by-side comparison PDF to customer

### Key IDs
- **CraftMyPDF Template ID:** `6bd77b23d243530c`
- **n8n Before Workflow ID:** `2E0W8XWahUJ66J5X`
- **n8n After Workflow ID:** `soHNiFmyqvkaOyB4`

### Photo-to-Window Matching

Techs upload photos and enter numbered notes. n8n matches by position/index.

```javascript
const photos = input.before_photos;
const notes = input.window_details.split('\n').filter(line => line.trim());
const windows = photos.map((photo, index) => ({
  number: index + 1,
  photo_url: photo,
  details: notes[index] || "No details provided",
  location: notes[index]?.split('-')[0]?.replace(/^\d+\.\s*/, '').trim() || `Window ${index + 1}`,
  measurements: notes[index]?.match(/\d+[""]?\s*x\s*\d+[""]?/i)?.[0] || ""
}));
```

---

## CraftMyPDF Integration

- **API:** `POST https://api.craftmypdf.com/v1/create`
- **Auth:** `X-API-KEY: {your_api_key}`
- **Template sections:** Header (every page), Normal (body, repeatable), Footer (every page)
- **Data binding:** `{{ data.field }}`, `{{ row.field }}` in data-bound sections
- **Page numbers:** `{{ sys.pageNumber }}` / `{{ sys.totalPages }}`

---

## Best Practices

### n8n Naming
- **Workflows:** `[Source] to [Destination] - [Action]`
- **Nodes:** Name by function, not type

### Error Handling
- Error Trigger node for critical automations
- Log errors with context (workflow name, input data, timestamp)

### Testing
- Always validate with `validate_workflow` before activating
- Test with sample data using manual triggers
- Verify error paths, not just happy paths
