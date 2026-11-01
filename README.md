# Translation Aid
Translation Aid is a Google Chrome browser extension that displays translation services in a sidebar. It automatically translates text selected on web pages and shows the translation in the sidebar. It currently supports two translation services: Argos Translate and Google Translate.

## How does it work? (in a nutshell)
Translation Aid sends the text to be translated to a Python-based script via the Chrome Native API; the script then returns the translated content to the browser extension, which displays it. The script utilizes the [argostranslate](https://pypi.org/project/argostranslate/) and [googletrans](https://pypi.org/project/googletrans/) Python modules to perform the translation. In the case of Google Translate, the text is sent to Google’s servers, and the translation is received back from them; conversely, Argos Translate is installed on the local machine, meaning it performs translations locally. Consequently, the speed of translation depends on the computing power of the local machine.

## Installing a Browser Extension
# 1. Opening the extensions tab
Open the Chrome home screen, then click on the following (as shown in the image below):
```
menu (top right corner) -> Extension -> Manage Extensions
```
![Opening the extensions tab](images/installExtension1.png)

