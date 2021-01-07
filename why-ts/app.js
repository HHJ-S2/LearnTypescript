// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

// 타입 정의
/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User // User의 type은 Object이다.
 * @property {string} name // 키값 name에게 type은 string 이라는 속성을 정의한다.
 * @property {string} email
 * @property {Address} address // 키값 address의 type은 Address라는 Object를 정의한다.
 */

/**
 * @returns {Promise<User>}
 */

function fetchUser() {
  return axios.get(url);
}

function startApp() {
  // axios
  // .get(url)
  fetchUser()
  .then(function (response) {
    user = response.data;
    console.log(user);
    // TODO: 이름, 이메일, 주소 표시하기
    
    username.innerText = user.name;
    email.innerText = user.email;
    address.innerText = user.address.street;
  })
  .catch(function (error) {
      console.log(error);
    });
  }

  fetchUser().then((res)=>{
    res.address
  });

startApp();
