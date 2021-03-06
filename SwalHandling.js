import Swal from 'sweetalert2'
import Axios from 'axios';
//import your loadinghandling here if necessary

export function ErrorHandling(props = "") {
  
  let errMessage = ''

  if(props == 'Error: Request failed with status code 400')
  {
    errMessage = 'Please check your input field'
  }
  else if(props == 'Error: Network Error')
  {
    errMessage = 'Connection lost, please check your Internet network'
  }
  else if(props == 'Error: Request failed with status code 404')
  {
    errMessage = 'Link not found'
  }
  else if(props == 'Error: Request failed with status code 401')
  {
    errMessage = 'Session timeout, please login'
  }
  else if(props == 'Error: Request failed with status code 500')
  {
    errMessage = "Backend error, please check server"
  }
  else
  {
    errMessage = props
  }

  Swal.hideLoading()
    Swal.fire(
        {
          title: 'Failed !',
          type: 'error',
          icon: 'error',
          text: errMessage,
          showConfirmButton: true
        }
      )
}

export function SuccessHandling(props = "") {
  Swal.hideLoading()
    Swal.fire(
        {
          title: 'Success !',
          timer: 2000,
          type: 'success',
          text: props,
          icon: 'success',
          showConfirmButton: true
        }
      )
}

export function QuestionHandling(url, data, msg = "", myFunction) {
    Swal.hideLoading()
    Swal.fire({
      title: 'Are you sure?',
      html: msg,
      type: 'warning',
      input: 'textarea',
      icon: 'question',
      inputPlaceholder: 'Type your Comment here...',
      inputAttributes: {
        'aria-label': 'Type your Comment here',
        minlength: 50,
        maxlength: 500

      },
      validationMessage: "Please Insert Comment Min Type 50 Characters",
      showCancelButton: true,
    })
    .then(res => {
      if(res.value){
        // Type your command here after user hit confirm button
        
        Axios.post(url, data)
        .then(
          LoadingHandling() // if necessary, see my repo for this loading https://github.com/wisnuciwun/LoadingScreen
          SuccesHandling(msg)
          myFunction() // remove this if you dont need it
        )
        .catch(err => ErrorHandling(err))
      }
    })
  }

