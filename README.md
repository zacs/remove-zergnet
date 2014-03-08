remove-zergnet
==============

Chrome extension and userscript to remove Zergnet affiliate/article spam from web pages.

Installation
============

Chrome
------
To install for Chrome, just go to the listing on the [Chrome Web Store and install it](https://chrome.google.com/webstore/detail/remove-zergnet/manjkebbkajmpdndbahchokjphleklak).

Build
=====

To zip it up for app store submission, make sure to exlclude `.git` and `resources` dirs:

    zip -r removezergnet.zip remove-zergnet -x \*.git\* -x \*resources\*
