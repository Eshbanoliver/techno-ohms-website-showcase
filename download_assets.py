import os
import urllib.request
from urllib.error import URLError, HTTPError

base_url = "https://psptechno.com/"

assets = [
    "css/bootstrap.css",
    "css/font-awesome.css",
    "css/flaticon.css",
    "css/animate.css",
    "css/owl.css",
    "css/jquery.fancybox.css",
    "css/hover.css",
    "css/style-5.css",
    "css/colors/pink-5.css",
    "css/revolution/settings.css",
    "css/revolution/layers.css",
    "css/revolution/navigation.css",
    "css/responsive.css",
    "js/respond.js",
    "js/jquery-1.12.4.min.js",
    "js/bootstrap.min.js",
    "js/jquery.fancybox.pack.js",
    "js/jquery.fancybox-media.js",
    "js/owl.js",
    "js/jquery.appear.js",
    "js/jquery.countTo.js",
    "js/isotope.js",
    "js/validate.js",
    "js/switcher.js",
    "js/revolution/jquery.themepunch.tools.min.js",
    "js/revolution/jquery.themepunch.revolution.min.js",
    "js/revolution/extensions/revolution.extension.actions.min.js",
    "js/revolution/extensions/revolution.extension.carousel.min.js",
    "js/revolution/extensions/revolution.extension.kenburn.min.js",
    "js/revolution/extensions/revolution.extension.layeranimation.min.js",
    "js/revolution/extensions/revolution.extension.migration.min.js",
    "js/revolution/extensions/revolution.extension.navigation.min.js",
    "js/revolution/extensions/revolution.extension.parallax.min.js",
    "js/revolution/extensions/revolution.extension.slideanims.min.js",
    "js/revolution/extensions/revolution.extension.video.min.js",
    "js/script.js"
]

for asset in assets:
    # Handle directories
    dir_name = os.path.dirname(asset)
    if dir_name:
        os.makedirs(dir_name, exist_ok=True)
    
    url = base_url + asset
    file_path = asset
    print(f"Downloading {url} to {file_path}")
    
    try:
        urllib.request.urlretrieve(url, file_path)
        print(f"Downloaded {file_path}")
    except HTTPError as e:
        print(f"HTTPError for {url}: {e.code}")
    except URLError as e:
        print(f"URLError for {url}: {e.reason}")

