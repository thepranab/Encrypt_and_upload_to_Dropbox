(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[714],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return y}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=i(n),y=r,m=c["".concat(s,".").concat(y)]||c[y]||u[y]||o;return n?a.createElement(m,p(p({ref:t},d),{},{components:n})):a.createElement(m,p({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var i=2;i<o;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3269:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return d},default:function(){return c}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),p=["components"],l={title:"Today app"},s=void 0,i={unversionedId:"django/today-app",id:"django/today-app",isDocsHomePage:!1,title:"Today app",description:"Now let's create another app called today. It will tell us what date it is,",source:"@site/docs/django/today-app.md",sourceDirName:"django",slug:"/django/today-app",permalink:"/python-tutorial/django/today-app",editUrl:"https://github.com/pranabdas/python-tutorial/blob/master/docs/django/today-app.md",version:"current",frontMatter:{title:"Today app"},sidebar:"docs",previous:{title:"Django",permalink:"/python-tutorial/django/webapp"},next:{title:"Todo app",permalink:"/python-tutorial/django/todo-app"}},d=[{value:"Handling static files",id:"handling-static-files",children:[]}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now let's create another app called ",(0,o.kt)("strong",{parentName:"p"},"today"),". It will tell us what date it is,\nwhat day it is and and greeting based on the time of the day."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1:")," Create our app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"django-admin startapp today\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Install the app")," in our main Django project. Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"myWebApp/settings.py")," and\ninclude ",(0,o.kt)("inlineCode",{parentName:"p"},"today")," in the installed app list."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Register the url:")," Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"myWebApp/urls.py")," and include the following path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"path('today/', include(\"today.urls\")),\n")),(0,o.kt)("p",null,"However, our ",(0,o.kt)("inlineCode",{parentName:"p"},"today.urls")," does not exist yet. so create ",(0,o.kt)("inlineCode",{parentName:"p"},"today/urls.py")," and put\nthe following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path('', views.index, name='index'),\n]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Create the views")," Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"today/views.py")," and write the following index\nfunction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from django.shortcuts import render\nimport datetime\n\ndef index(request):\n    """Today app index"""\n\n    t = datetime.datetime.now()\n\n    if (t.hour < 12):\n        greet_message = "Good morning!"\n    elif (t.hour < 18):\n        greet_message = "Good afternoon!"\n    elif (t.hour < 21):\n        greet_message = "Good evening!"\n    else:\n        greet_message = "Good night!"\n\n    date_message = "Today\'s date: " + str(t.day) + "/" + str(t.month) + "/" + \\\n            str(t.year)\n\n    if (t.weekday == 1):\n        day_message = "Today is Monday."\n    elif (t.weekday == 2):\n        day_message = "Today is Tuesday."\n    elif (t.weekday == 3):\n        day_message = "Today is Wednesday."\n    elif (t.weekday == 4):\n        day_message = "Today is Thursday."\n    elif (t.weekday == 5):\n        day_message = "Today is Friday."\n    elif (t.weekday == 6):\n        day_message = "Today is Saturday."\n    else:\n        day_message = "Today is Sunday."\n\n    return render(request, "today/index.html", {\n        "greet_message": greet_message,\n        "date_message": date_message,\n        "day_message": day_message\n        })\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Create webpage:")," Create the template directory and index page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p today/templates/today\nvi today/templates/today/index.html\n")),(0,o.kt)("p",null,"Let's put following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n        <head>\n                <title>Today app</title>\n        </head>\n        <body>\n                <p>{{ greet_message }}</p>\n                <p>{{ date_message }}</p>\n                <p>{{ day_message }}</p>\n        </body>\n</html>\n")),(0,o.kt)("p",null,"Now we can runserver and visit ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8000/today")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 manage.py runserver\n")),(0,o.kt)("p",null,"Now we get the idea. We can use any python logic to populate our html page."),(0,o.kt)("h3",{id:"handling-static-files"},"Handling static files"),(0,o.kt)("p",null,"Let's say we want to style the webpage with css. Django convention is to create\na directory: ",(0,o.kt)("inlineCode",{parentName:"p"},"today/static/today/")," and put our ",(0,o.kt)("inlineCode",{parentName:"p"},"styles.css")," there."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"html {\n        font-family: Arial, sans-serif;\n        color: darkblue;\n        text-align: center;\n}\n\np {\n        font-size: 2em;\n}\n")),(0,o.kt)("p",null,"Now let's go to our ",(0,o.kt)("inlineCode",{parentName:"p"},"today/templates/today/index.html"),", load the static file and\nadd the stylesheet in our head section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"{% load static %}\n<html>\n        <head>\n                <link rel=\"stylesheet\" href={% static 'today/styles.css' %}>\n                <title>Today app</title>\n        </head>\n        <body>\n                <p>{{ greet_message }}</p>\n                <p>{{ date_message }}</p>\n                <p>{{ day_message }}</p>\n        </body>\n</html>\n")))}c.isMDXComponent=!0}}]);