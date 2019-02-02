app.controller('MainController',
                ['$scope', function ($scope) {
                    $scope.title = 'Top Sellers Bolivia';
                    $scope.promo = 'La Paz';
                    $scope.products = [
                                    {
                                        name: 'The Book of Trees',
                                        price: 19,
                                        pubdate: new Date('2014', '03', '08'),
                                        cover: 'img/the-book-of-trees.jpg',
                                        likes: 0,
                                        dislikes: 0
                                    },
                                    {
                                        name: 'Program or be Programmed',
                                        price: 8,
                                        pubdate: new Date('2013', '08', '01'),
                                        cover: 'img/program-or-be-programmed.jpg',
                                        likes: 0,
                                        dislikes: 0
                                    },
                                    {
                                        name: 'Program',
                                        price: 0.8,
                                        pubdate: new Date('2013', '08', '08'),
                                        cover: 'img/program-or-be-programmed.jpg',
                                        likes: 0,
                                        dislikes: 0
                                    },
                                    {
                                        name: 'Be Programmed',
                                        price: 18,
                                        pubdate: new Date('2013', '08', '18'),
                                        cover: 'img/program-or-be-programmed.jpg',
                                        likes: 0,
                                        dislikes: 0
                                    }
                    ];
                    $scope.plusOne = function (index) {
                        $scope.products[index].likes += 1;
                    };
                    $scope.minusOne = function (index) {
                        $scope.products[index].dislikes += 1;
                    };
                }
               ]);