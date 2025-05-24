#!/bin/zsh
note_name="$1"
file_name="${1// /-}"
file_name=$(echo "$file_name" | tr '[:upper:]' '[:lower:]')
folder="$HOME/projects/dev/sites/notebook/content/notes"
date=$(date +%F)
cat <<EOF > "$folder/$file_name.md"
---
title: $note_name
tags:
created: $date
updated: $date
---
EOF

open "obsidian://open?vault=content&file=notes/$file_name.md"