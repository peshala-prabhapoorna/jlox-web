#!/bin/bash

# Define output directory
output_dir="build/scripts"

# Check if index.html exists
if [ ! -f "index.html" ]; then
    echo "Error: index.html not found in current directory"
    exit 1
fi

# Create build/scripts directory structure
echo "Creating build directory structure..."
rm -rf "$output_dir"
mkdir -p "$output_dir"

# Create output file for concatenated JS
output_file="$output_dir/script.js"
touch "$output_file"

# Process files to be concatenated
echo "Processing files for concatenation..."
js_concat_files=$(grep -o '<script.*class="build-concat-js".*>' index.html | grep -o 'src="[^"]*"' | cut -d'"' -f2)

# Concatenate JS files
if [ -n "$js_concat_files" ]; then
    for js_file in $js_concat_files; do
        if [ -f "$js_file" ]; then
            echo "Concatenating: $js_file"
            # Add a comment to identify the source file
            echo "/* Source: $js_file */" >> "$output_file"
            cat "$js_file" >> "$output_file"
            echo -e "\n" >> "$output_file"
        else
            echo "Warning: JavaScript file not found: $js_file"
        fi
    done
    echo "Concatenation complete: $output_file"
else
    echo "No files found for concatenation"
fi

# Process files to be copied
echo "Processing files for copying..."
js_copy_files=$(grep -o '<script.*class="build-copy-js".*>' index.html | grep -o 'src="[^"]*"' | cut -d'"' -f2)

# Copy JS files
if [ -n "$js_copy_files" ]; then
    for js_file in $js_copy_files; do
        if [ -f "$js_file" ]; then
            echo "Copying: $js_file"
            # Extract filename from path
            filename=$(basename "$js_file")
            cp "$js_file" "$output_dir/$filename"
        else
            echo "Warning: JavaScript file not found: $js_file"
        fi
    done
    echo "Copying complete"
else
    echo "No files found for copying"
fi

echo "Build process completed successfully"
