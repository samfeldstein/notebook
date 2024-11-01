export const eleventyComputed = {
	backlinks: async (data) => {
		const notes = data.collections.notes;
		const currentFileSlug = data.page.filePathStem.replace('/notes/', '');

		const backlinks = [];

		for (const otherNote of notes) {
			// Use async `read()` to access note content
			let noteContent = await otherNote.template.read();

			// Ensure noteContent is a string before using .match()
			noteContent = typeof noteContent === 'string' ? noteContent : JSON.stringify(noteContent);

			// Get all links from otherNote
			const outboundLinks = (noteContent.match(/\[\[([^\]]+)\]\]/g) || [])
				.map((link) =>
					link
						.slice(2, -2)
						.split("|")[0]
						.trim()
				);

			// If the other note links here, return related info
			if (outboundLinks.some((link) => link === currentFileSlug)) {
				// Construct preview for hovercards
				const preview = noteContent.slice(0, 240);

				backlinks.push({
					url: otherNote.url,
					title: otherNote.data.title || otherNote.fileSlug,
					preview,
				});
			}
		}

		return backlinks;
	},

	footnotes: (data) => {
		const content = data.content || '';

		// Extract footnotes at the end of the document (e.g., "[1]: This is a footnote text.")
		const footnotePattern = /\[(\d+)\]:\s*(.+)/g;
		let match;
		const footnotes = [];

		while ((match = footnotePattern.exec(content)) !== null) {
			footnotes.push({
				number: match[1],
				text: match[2]
			});
		}

		// Replace inline references (e.g., "[^1]") with links
		const renderedContent = content.replace(/\[\^(\d+)\]/g, (match, number) => {
			return `<a href="#footnote-${number}" id="ref-${number}" class="footnote-ref">[${number}]</a>`;
		});

		return {
			renderedContent,
			footnotes
		};
	}
};
