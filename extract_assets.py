from bs4 import BeautifulSoup

with open('live_about.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

print("--- CSS ---")
for link in soup.find_all('link', rel='stylesheet'):
    print(link.get('href'))

print("\n--- JS ---")
for script in soup.find_all('script'):
    src = script.get('src')
    if src:
        print(src)
