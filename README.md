```
 ____                             _   _        ____        _       
/ ___|  ___ _ __ ___   __ _ _ __ | |_(_) ___  |  _ \  ___ (_) ___  
\___ \ / _ \ '_ ` _ \ / _` | '_ \| __| |/ __| | | | |/ _ \| |/ _ \ 
 ___) |  __/ | | | | | (_| | | | | |_| | (__  | |_| | (_) | | (_) |
|____/ \___|_| |_| |_|\__,_|_| |_|\__|_|\___| |____/ \___// |\___/ 
 Web Semantics, Inc.                                    |__/       
```

A Dijit Theme for powerful and modern Web apps.

This project harness the style awesomeness of the [Semantic UI](http://semantic-ui.com/) Framework with [Dojo Toolkit](https://dojotoolkit.org/) powerful UI widgets.

A new method of building Dijit Themes following the Semantic UI approach with a similar folder structure throught this project.

Dijit widgets directly import and inherint CSS from their Semantic UI conterparts, if any!

## Installation

- Clone locally, `git clone https://github.com/websemantics/semantic-dojo`
- Install dependencies, `bower install`
- Create file `libs/semantic/src/theme.config` with the following content:

		/* Use a common Config file with Semantic UI and Dijit Themes. */
	
		@targetFolder : @semanticUiFolder; 
		
		@import "../../../less/theme.config";
		
		/* End Config */

- Browse to `semantic-dojo/test/index.html`

## Guide

[Semantic UI](http://semantic-ui.com/) is an awesome CSS framework that provides a wide range of UI components. A powerful feature of Semantic UI is the ability to build various themes to each of its compoenents. For example, the Button widget comes with a varity of themes for example, flat default, basic, github, raised and many more. 

[Semantic Dojo](https://github.com/websemantics/semantic-dojo) brings these awesome features to Dojo Toolkit, allowing those who love TDK to build modern Web apps.

To test different themes for the supported widgets, go to 'less/theme.config' and change the Button theme for example from 'default' to 'raised': `@button     : 'raised';`, refresh and enjoy!

## Progress

This project is still in development. The following widgets have been partially ported:

- Textbox
![Textbox](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/textbox.png "Textbox")
- TextArea
![TextArea](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/textarea.png "TextArea")
- Select
![Select](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/select.png "Select")
- Icons
![Icons](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/icons.png "Icons")
- Buttons
![Buttons2](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/buttons-2.png "Buttons2")
![Buttons1](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/buttons-1.png "Buttons1")
![Buttons3](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/buttons-3.png "Buttons3")
![Buttons4](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/buttons-4.png "Buttons4")
![Buttons5](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/buttons-5.png "Buttons5")
- Progress Bars
![ProgressBar2](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/progress-bar.png "ProgressBar2")
- Tooltip / Dialogtip
![Tooltip](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/tooltip.png "Tooltip")
- Tabs
![Tabs](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/tabs.png "Tabs")
- Sliders
![Sliders](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/sliders.png "Sliders")
- Color Palette
![ColorPalette](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/palette.png "ColorPalette")
- Radio / Checkbox
![RadioCheckbox](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/radio-checkbox.png "RadioCheckbox")

## Open Source projects used

* Dojo Flat Theme - https://github.com/Esri/dojo-theme-flat
* Semantic UI LESS - https://github.com/Semantic-Org/Semantic-UI-LESS
