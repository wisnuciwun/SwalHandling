# SwalHandling &#x1F34E;

```diff
+ Short Documentation
```

:rice: Requirement :
- reactstrap
- sweetalert2 (i am using 10.16.0 version)


:eyes: Usage :
- Put this file to your component directory folder. You can choose to make a new folder or not.
- import this component to your views or other component and put it in function you need


:phone: Parameters :
- [x] ErrorHandling & SuccesHandling
- just put any text or parameter into this function bracket


- [x] QuestionHandling
(sequentially in bracket)
- first param : set url for AJAX call
- second param : set object for AJAX call
- third param : text which will appear in SuccesHandling

:paperclip: Example :
```js
ErrorHandling("Failed to send your data") // or you can leave it blank
SuccesHandling("Your data succesfully sent") // or you can leave it blank
QuestionHandling("api/postdata", this.state.data, "Your data succesfully sent", this.moveToMainMenu) // if you want to skip the third param, give blank quotation ("")
```

:camera: Preview :
- https://i.ibb.co/XWn3P7r/ca1662d6-89c8-4207-91db-411a428f14ad.jpg
