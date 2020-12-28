# uebersicht_widgets
Widgets of Übersicht (https://tracesof.net/uebersicht/)

## setup Übersicht

1. clone this repository
1. download and install Übersicht
1. launch Übersicht
1. set the cloned directory as the `Widgets Folder` of Übersicht
    - click the menu icon of Übersicht
    - select `Preferences...`
    - click `Widgets Folder` and select the cloned directory

## contained widgets

- `clock` : show current date and time
- `weather` : show current weather in the specified city

![](sample.png)

## clock widget

### setup the clock widget

nothing needed

### customize the clock widget

at your own risk

## weather widget

### setup the weather widget

- [OpenWeatherMap](https://openweathermap.org/)
    - create your account and get API key of free plan if you don't have
    - download [city.list.json.gz](http://bulk.openweathermap.org/sample/city.list.json.gz] and unzip it
    - find the city ID of your favourite city from city.list.json
- [WeatherIcons](https://erikflowers.github.io/weather-icons/)
    - download zipfile and unzip it
    - copy `weathericons-regular-webfont.ttf` from unzipped folder (`weather-icons-master/font`) to cloned directory
- weather widget
    - copy `weather.jsx.sample` as `weather.jsx`
    - change values of `city_id` and `api_key` in `weather.jsx`

### customize the weather widget

- use fahrenheit instead of celsius as the unit of temperature
    - change the value of `unit_api` as `imperial`
    - change the value of `unit_icon` as `\uf045`

## Übersicht tips

- with default settings of Übersicht, you can't usej desktop icons well
    - click the menu icon of Übersicht
    - select `Preferences...`
    - off the check box of `Enable interaction`
