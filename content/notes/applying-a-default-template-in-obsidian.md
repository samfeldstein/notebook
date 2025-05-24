---
title: Applying a Default Template in Obsidian
tags:
  - obsidian
  - zsh
  - command-line
created: 2025-05-23
updated: 2025-05-23
---

As far as I know, there's no way to apply a default template to new notes in Obsidian. I had Claude write this shell script that does the same thing:

```zsh
#!/bin/zsh

# Check if the private flag is set
private=false
if [ "$1" = "-p" ]; then
    private=true
    shift  # Remove -p from arguments
fi

# Check if note title was provided
if [ -z "$1" ]; then
    echo "Usage: new-note [-p] 'Note Title'"
    exit 1
fi

# Get the note title and create filename
note_name="$1"
file_name="${1// /-}"  # Replace spaces with hyphens
file_name=$(echo "$file_name" | tr '[:upper:]' '[:lower:]')  # Convert to lowercase

# Set folder and vault path based on private flag
if [ "$private" = true ]; then
    folder="$HOME/projects/dev/sites/notebook/content/notes/private"
    vault_path="notes/private/$file_name.md"
else
    folder="$HOME/projects/dev/sites/notebook/content/notes"
    vault_path="notes/$file_name.md"
fi

# Get current date
date=$(date +%F)

# Create the markdown file with YAML frontmatter
cat <<EOF > "$folder/$file_name.md"
---
title: $note_name
tags:
created: $date
updated: $date
---
EOF

# Open the new note in Obsidian
open "obsidian://open?vault=content&file=$vault_path"
```