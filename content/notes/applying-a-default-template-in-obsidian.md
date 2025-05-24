---
title: Applying a Default Template in Obsidian
tags:
  - obsidian
  - zsh
  - command-line
created: 2025-05-23
updated: 2025-05-23
---

As far as I know, there's no way to apply a default template to new notes in Obsidian. I had Claude write a shell script that does the same thing.

The script creates a new markdown file, inserts YAML frontmatter, and opens the file automatically in Obsidian.

If you don’t know how to create a shell script, see [How to Run a Zsh Script](how-to-run-a-zsh-script.md)

## Usage

Create a regular note:

```zsh
new-note "My Project Ideas"
```

Create a private note (goes in the private folder):

```zsh
new-note -p "Personal Thoughts"
```

## Script

In this example, your Obsidian vault is called `my-vault`, your notes folder is called `notes`, and your private folder is called `private-notes`.

The script does the following:

- Converts your title to a filename (spaces become hyphens, words become lowercase)
- Creates a markdown file with YAML frontmatter
- Places regular notes in `notes/` , and private notes in `notes/private/`
- Automatically opens the new note in Obsidian

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
    folder="$HOME/my-vault/private-notes“
    vault_path="private-notes/$file_name.md"
else
    folder="$HOME/my-vault/notes"
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
open "obsidian://open?vault=my-vault&file=$vault_path"
```