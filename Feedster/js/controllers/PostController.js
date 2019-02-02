app.controller('PostController', ['$scope', function ($scope) {
    $scope.posts = [
    {
        author: {
            name: 'Calvin Broadus, Jr.',
            avatar: 'img/cbj.svg'
        },
        comment: {
            img: 'img/dog.jpg',
            text: 'How much for that dog in the window?'
        }
    },
    {
        author: {
            name: 'Matthew Healy',
            avatar: 'img/mh.svg'
        },
        comment: {
            img: 'img/chester.jpg',
            text: 'I used to have a recurring dream when I was younger.'
        }
    }
  ]
} ]);