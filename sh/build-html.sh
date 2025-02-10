#!/bin/bash

# Define input and output files
input_file="index.html"
output_dir="build"
output_file="$output_dir/index.html"

# Check if input file exists
if [ ! -f "$input_file" ]; then
    echo "Error: $input_file not found in current directory"
    exit 1
fi

# Create build directory if it doesn't exist
mkdir -p "$output_dir"

# Create temporary file
temp_file=$(mktemp)

# Copy original file to temp file
cp "$input_file" "$temp_file"

# Process CSS concatenation
echo "Processing CSS links..."
# Find all build-concat-css links
css_links=$(grep -n '<link.*class="build-concat-css".*>' "$temp_file" | cut -d: -f1)

if [ -n "$css_links" ]; then
    # Get the first line number
    first_css_line=$(echo "$css_links" | head -n1)
    # Replace first occurrence with the concatenated file link
    sed -i "${first_css_line}c\    <link rel=\"stylesheet\" href=\"css/styles.css\">" "$temp_file"
    
    # Remove remaining build-concat-css links
    for line in $(echo "$css_links" | tail -n +2 | sort -nr); do
        sed -i "${line}d" "$temp_file"
    done
fi

# Process JS concatenation
echo "Processing JS scripts..."
# Find all build-concat-js scripts
js_concat_links=$(grep -n '<script.*class="build-concat-js".*>' "$temp_file" | cut -d: -f1)

if [ -n "$js_concat_links" ]; then
    # Get the first line number
    first_js_line=$(echo "$js_concat_links" | head -n1)
    # Replace first occurrence with the concatenated file link
    sed -i "${first_js_line}c\    <script src=\"scripts/script.js\"></script>" "$temp_file"
    
    # Remove remaining build-concat-js scripts
    for line in $(echo "$js_concat_links" | tail -n +2 | sort -nr); do
        sed -i "${line}d" "$temp_file"
    done
fi

# Remove build-copy-js class from remaining script tags
sed -i 's/class="build-copy-js" //g' "$temp_file"

# Move temporary file to final location
mv "$temp_file" "$output_file"

echo "HTML build complete: $output_file"
