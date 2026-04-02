import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove Service Modal CSS
content = re.sub(r'\s+/\* Service Modal Styles \*/.*?\s+/\* Make cards clickable \*/', '\n        /* Make cards clickable */', content, flags=re.DOTALL)

# 2. Remove media query for modal content
media_query_regex = r'\s+@media \(max-width: 768px\) \{\s+\.service-modal-content \{[^}]+\}\s+\.modal-body h3 \{[^}]+\}\s+\.modal-features \{[^}]+\}\s+\.modal-features li \{[^}]+\}\s+\}'
content = re.sub(media_query_regex, '', content, flags=re.DOTALL)

# 3. Remove Modal HTML
content = re.sub(r'\s+<!-- Services Modal -->\s*<div class="service-modal-overlay.*?</div>\s*</div>\s*</div>', '', content, flags=re.DOTALL)

# 4. Remove serviceDetails object
js_regex = r'\s+const serviceDetails = \{.*?\s+document\.addEventListener\(\'DOMContentLoaded\', \(\) => \{'
content = re.sub(js_regex, '\n        document.addEventListener(\'DOMContentLoaded\', () => {', content, flags=re.DOTALL)

# 5. Replace modal JS logic with redirect logic
js_logic_regex = r'\s+const modal = document\.getElementById\(\'serviceModal\'\).*?(\s+\}\);\s+</script>)'
new_js = '''
            // Instead of opening modal, redirect to detail page!
            document.querySelectorAll('.services-carousel .card').forEach(card => {
                card.addEventListener('click', function(e) {
                    const titleEl = this.querySelector('h4');
                    if (!titleEl) return;
                    
                    const rawTitle = titleEl.textContent.trim();
                    const slug = rawTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    window.location.href = 'service-detail.html?id=' + slug;
                });
            });\\1'''
content = re.sub(js_logic_regex, new_js, content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("index.html updated successfully!")
