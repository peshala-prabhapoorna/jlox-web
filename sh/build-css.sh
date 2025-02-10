#!/bin/bash

# Define output directory
output_dir="build/css"

# Check if index.html exists
if [ ! -f "index.html" ]; then
    echo "Error: index.html not found in current directory"
    exit 1
fi

# Remove existing build directory if it exists and create a new one
echo "Creating build directory structure..."
rm -rf "$output_dir"
mkdir -p "$output_dir"

# Create output file
output_file="$output_dir/styles.css"
touch "$output_file"

# Extract CSS file paths from HTML and concatenate them
echo "Concatenating CSS files..."

# Use grep to find link tags with the specified class, then extract href values
css_files=$(grep -o '<link.*class="build-concat-css".*>' index.html | grep -o 'href="[^"]*"' | cut -d'"' -f2)

# Check if any matching CSS files were found
if [ -z "$css_files" ]; then
    echo "No CSS files with class='build-concat-css' found in index.html"
    exit 1
fi

# Process each CSS file
for css_file in $css_files; do
    if [ -f "$css_file" ]; then
        echo "Processing: $css_file"
        # Add a comment to identify the source file
        echo "/* Source: $css_file */" >> "$output_file"
        cat "$css_file" >> "$output_file"
        echo -e "\n" >> "$output_file"
    else
        echo "Warning: CSS file not found: $css_file"
    fi
done

echo "CSS concatenation complete. Output file: $output_file"
