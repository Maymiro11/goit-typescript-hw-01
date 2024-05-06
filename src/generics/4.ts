type MyUser = {
    name: string;
    surname: string;
    email: string;
    password: string;
  }
  
  function createOrUpdateUser(initialValues: Partial<MyUser>) {
    if (initialValues.email && initialValues.password) {
      console.log('Email та пароль користувача оновлені');
    } else {
      console.log('Не вдалося оновити користувача: недостатньо даних');
    }
  }
  
  createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
  });
  