// Generated by CoffeeScript 1.7.1
"use strict";
Mifan.controller("404Ctrl", function($scope) {
  $scope.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"];
  $scope.$on("$viewContentLoaded", function() {
    return $scope.$emit("pageChange", "404");
  });
  return false;
});

// Generated by CoffeeScript 1.7.1
"use strict";
Mifan.controller("globalCtrl", function($scope) {
  var BODY, DOC, IsAndroid, IsBlackBerry, IsChrome, IsIE, IsIEMobile, IsIOS, IsIPad, IsIPhone, IsTouch, IsWeixin, IsWindowsPhone, NA, NG, UA, WIN;
  DOC = document;
  WIN = window;
  BODY = DOC['body'];

  /*
  设备是否支持触摸事件
  这里使用WIN.hasOwnProperty('ontouchend')在Android上会得到错误的结果
  @type {boolean}
   */
  IsTouch = "ontouchend" in WIN;
  NA = WIN.navigator;
  UA = NA.userAgent;
  IsAndroid = /Android|HTC/i.test(UA) || /Linux/i.test(NA.platform + "");
  IsIPad = !IsAndroid && /iPad/i.test(UA);
  IsIPhone = !IsAndroid && /iPod|iPhone/i.test(UA);
  IsIOS = IsIPad || IsIPhone;
  IsWindowsPhone = /Windows Phone/i.test(UA);
  IsBlackBerry = /BB10|BlackBerry/i.test(UA);
  IsIEMobile = /IEMobile/i.test(UA);
  IsIE = !!DOC.all;
  IsWeixin = /MicroMessenger/i.test(UA);
  IsChrome = !!WIN['chrome'];
  NG = WIN['angular'];
  $scope.WIN = WIN;
  $scope.DOC = DOC;
  $scope.BODY = BODY;
  $scope.IsIPhone = IsIPhone;
  $scope.IsIPad = IsIPad;
  $scope.IsIOS = IsIOS;
  $scope.IsAndroid = IsAndroid;
  $scope.IsIEMobile = IsIEMobile;
  $scope.IsWeixin = IsWeixin;
  $scope.IsTouch = $scope.IsMobile = IsTouch;
  $scope.IsChrome = IsChrome;
  return $scope.IsIE = IsIE;
});

// Generated by CoffeeScript 1.7.1
"use strict";
Mifan.controller("headCtrl", function($scope) {
  $scope.dropdownOpen = false;
  $scope.toggleDropdown = function() {
    return $scope.dropdownOpen = !$scope.dropdownOpen;
  };
  $scope.support = function() {
    return alert(1);
  };
  $scope.arrowNav = {};
  $scope.$watch("page", function() {
    switch ($scope.page) {
      case "home":
        return $scope.arrowNav = {
          left: 23,
          hide: false
        };
      case "msg":
        return $scope.arrowNav = {
          left: 90,
          hide: false
        };
      case "me":
        return $scope.arrowNav = {
          left: 176,
          hide: false
        };
      case "friend":
        return $scope.arrowNav = {
          left: 260,
          hide: false
        };
      default:
        return $scope.arrowNav = {
          left: 0,
          hide: true
        };
    }
  });
  return $scope.toggleMMenu = function() {
    return $scope.$emit("toggleMMenu");
  };
});

// Generated by CoffeeScript 1.7.1
"use strict";
Mifan.controller("homeCtrl", [
  "$scope", "$routeParams", function($scope, $routeParams) {
    $scope.legalFeedTypes = ["news", "answer", "reply"];
    if (0 > $scope.legalFeedTypes.indexOf($routeParams.type)) {
      $routeParams.type = "news";
    }
    $scope.feedType = $routeParams.type;
    $scope.$on("$viewContentLoaded", function() {
      return $scope.$emit("pageChange", "home");
    });
    $scope.remind = {
      newsNum: 0,
      answerNum: 2,
      replyNum: '...'
    };
    $scope.$on("clearAnswerRemind", function() {
      return $scope.remind.answerNum = 0;
    });
    $scope.$on("clearReplyRemind", function() {
      return $scope.remind.replyNum = 0;
    });
    $scope.loadingMore = function() {
      return $scope.isLoading = true;
    };
    return false;
  }
]);

// Generated by CoffeeScript 1.7.1
Mifan.controller("homeAnswer", function($scope) {
  $scope.content = "回答我的";
  console.log("回答我的");
  return $scope.$emit("clearAnswerRemind");
});

// Generated by CoffeeScript 1.7.1
"use strict";
Mifan.controller("homeAskCtrl", function($scope) {
  $scope.askQuesConent = "";
  $scope.bgUrl = "images/ask-bg-2.jpg";
  $scope.avatarUrl = "http://tp4.sinaimg.cn/2005321383/180/5698650002/1";
  $scope.isSending = false;
  $scope.onFocus = function() {
    return $scope.onInputing = true;
  };
  $scope.onBlur = function(force) {
    if (force || $scope.askQuesConent === "") {
      return $scope.onInputing = false;
    }
  };
  return $scope.send = function() {
    return $scope.isSending = true;
  };
});

// Generated by CoffeeScript 1.7.1
Mifan.controller("homeNews", function($scope) {
  $scope.content = "最新动态";
  console.log("最新动态");
  return $scope.newsCollect = [
    {
      a: 1
    }, {
      a: 2
    }, {
      a: 2
    }, {
      a: 2
    }, {
      a: 2
    }, {
      a: 2
    }, {
      a: 2
    }, {
      a: 2
    }
  ];
});

// Generated by CoffeeScript 1.7.1
Mifan.controller("homeReply", function($scope) {
  $scope.content = "回应我的";
  console.log("回应我的");
  return $scope.$emit("clearReplyRemind");
});

// Generated by CoffeeScript 1.7.1
"use strict";
Mifan.controller("loginCtrl", function($scope) {
  $scope.$on("$viewContentLoaded", function() {
    return $scope.$emit("pageChange", "login");
  });
  $scope.$watch("email + password", function() {
    return $scope.isLogValid = $scope.email && $scope.password;
  });
  $scope.isLoging = false;
  return $scope.onSubmit = function() {
    return $scope.isLoging = true;
  };
});

// Generated by CoffeeScript 1.7.1
Mifan.controller("mMenuCtrl", function($scope) {
  return $scope.hideMMenu = function() {
    return $scope.$emit("toggleMMenu");
  };
});

// Generated by CoffeeScript 1.7.1
"use strict";
Mifan.controller("meCtrl", function($scope) {
  $scope.$on("$viewContentLoaded", function() {
    return $scope.$emit("pageChange", "me");
  });
  return false;
});

// Generated by CoffeeScript 1.7.1
"use strict";
Mifan.controller("msgCtrl", function($scope) {
  $scope.$on("$viewContentLoaded", function() {
    return $scope.$emit("pageChange", "msg");
  });
  return false;
});

// Generated by CoffeeScript 1.7.1
"use strict";
Mifan.controller("registerCtrl", function($scope) {
  $scope.$on("$viewContentLoaded", function() {
    return $scope.$emit("pageChange", "register");
  });
  $scope.$watch("email + password", function() {
    return $scope.isRegValid = $scope.email && $scope.password;
  });
  $scope.isReging = false;
  return $scope.regSubmit = function() {
    return $scope.isReging = true;
  };
});

// Generated by CoffeeScript 1.7.1
"use strict";
Mifan.controller("rootCtrl", function($scope) {
  var clientHeight;
  $scope.page = "home";
  $scope.username = "";
  $scope.supportNum = "1万";
  $scope.$on("pageChange", function(e, msg) {
    return $scope.page = msg;
  });
  clientHeight = $scope.WIN.screen.availHeight;
  $scope.clientHeight = "" + clientHeight + "px";
  $scope.rootHeight = 'auto';
  $scope.isMMenuOpen = false;
  return $scope.$on("toggleMMenu", function() {
    $scope.isMMenuOpen = !$scope.isMMenuOpen;
    return $scope.rootHeight = $scope.isMMenuOpen ? "" + rootHeight + "px" : "auto";
  });
});

// Generated by CoffeeScript 1.7.1
"use strict";
Mifan.controller("welcomeCtrl", [
  "$scope", function($scope) {
    $scope.$on("$viewContentLoaded", function() {
      return $scope.$emit("pageChange", "welcome");
    });
    $scope.$watch("email + password", function() {
      return $scope.isLoginValid = $scope.email && $scope.password;
    });
    $scope.isLoginBox = false;
    $scope.isLoging = false;
    $scope.isReging = false;
    $scope.toggleLogin = function() {
      return $scope.isLoginBox = !$scope.isLoginBox;
    };
    $scope.loginSubmit = function() {
      return $scope.isLoging = true;
    };
    $scope.regSubmit = function() {
      return $scope.isReging = true;
    };
    return false;
  }
]);
