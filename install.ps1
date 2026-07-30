param(
  [string]$ProjectRoot = "E:\Dev\alwaysready4moore"
)

$ErrorActionPreference = "Stop"
$PatchRoot = Split-Path -Parent $MyInvocation.MyCommand.Path

Write-Host "Applying portfolio cleanup to $ProjectRoot..." -ForegroundColor Cyan

$files = @(
  "data\featuredSystems.ts",
  "data\searchIndex.ts",
  "app\work\page.tsx",
  "app\sitemap.ts",
  "components\FeaturedSystemCard.tsx"
)

foreach ($relativePath in $files) {
  $source = Join-Path $PatchRoot $relativePath
  $destination = Join-Path $ProjectRoot $relativePath
  $destinationDirectory = Split-Path -Parent $destination
  New-Item -ItemType Directory -Path $destinationDirectory -Force | Out-Null
  Copy-Item $source $destination -Force
  Write-Host "Updated $relativePath"
}

$routesToRemove = @(
  "app\work\pirate-ship-knowledge-systems",
  "app\work\knowledge-systems"
)

foreach ($relativePath in $routesToRemove) {
  $target = Join-Path $ProjectRoot $relativePath
  if (Test-Path $target) {
    Remove-Item $target -Recurse -Force
    Write-Host "Removed $relativePath"
  }
}

Write-Host "Done. The resume was not changed." -ForegroundColor Green
Write-Host "Next: npm run lint; npx tsc --noEmit; npm run build"
