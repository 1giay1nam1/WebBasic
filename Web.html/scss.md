# Cài đặt
- Install Scss
`npm install -g sass`
- Build Scss to Css
`sass source/stylesheets/index.scss build/stylesheets/index.css`

# Scss là gì 
CSS Preprocessors là ngôn ngữ tiền xử lý CSS. Nó có công dụng sẽ giúp bạn viết một cú pháp CSS gần nhau với một ngôn ngữ lập trình rồi compile nó ra CSS thuần. Có rất nhiều CSS Preprocessor như SASS, LESS, Stylus....

# Tại sao lại dùng Scss hay Sass
SCSS cho phép viết code gọn gàng, nhanh chóng. SCSS cung cấp tính năng nesting, có thể sử dụng hàm, vòng lặp....

# Một số hàm, phương thức mà bạn cần nắm

### 1, Nested (Xếp chồng) - hay và là 1 trong những lí do dev dùng scss
- có thể viết các selector trồng nhau, giúp code chặt chẽ hơn

### 2, Biến
chỉ cần đặt tên biến ở đầu file, bắt đầu bằng kí tự $
vd:
```
$color: #fff;

a {
  color: $color;
}
```

### 3, Mixin
- Cơ bản nó là 1 hàm hoặc 1 khối code chung, có thể truyền tham số hoặc không, và đặc biệt nó có thể dùng đi dùng lại
Ví dụ: Trong trang web của b có rất nhiều button, và về cơ bản CSS của nó đều giống nhau, thì ta có thể dùng mixin để tránh lặp lại code như sau
```
@mixin btnMixin {
  border-radius: 20px;
  min-width: 100px;
}

.button-1 {
  @include btnMixin
}

.button-2 {
  @include btnMixin
}

.button-3 {
  @include btnMixin
}

```

Hoặc nếu muốn truyền tham số vào:


```
// tức là tạo 1 mixin button và truyền vào tham số là $radius và khi dùng thì phải truyền tham số đó vào.

@mixin btnMixin($radius) {
  border-radius: $radius;
  min-width: 100px;
}

.button-1 {
  @include btnMixin(20px)
}

.button-2 {
  @include btnMixin(10px)
}

.button-3 {
  @include btnMixin(25px)
}

```

### 4, Kế thừa - Extend
kế thừa lại 1 đoạn code scss
ví dụ: 

```
  .common {
    padding: 0;
    margin: 0;
  }

  .container {
    @extend .common
  }

```


### 5, Import 
- tức là mình sẽ tách nhỏ các file riêng ra. và dùng từi khoá import, và các file muốn import cầm có dấu _ phía trc, ví dụ: _footer.scss và import như sau

```
@import 'footer'

```

### 6, Câu lệnh IF

```
$number : 5;

p {
  @if($number > 5) {
    color: blue
  }
  @else {
    color: red;
  }
}

```

### 7, Vòng lặp

#### 7.1 Vòng lặp for

```
@for $i from 1 to 4 {
  // để lấy giá trị của $i mỗi vòng lặp thì ta sử dụng cú pháp #{$i}.
    #item-#{$i}{
        background: red
    }
}

```

#### 7.2 Vòng lặp while


```
$index : 1;
 
@while $index <= 10
{
    @if ($index % 3 == 0) or ($index % 5 == 0)
    {
        .col-xs-#{$index}{
            background: blue;
        }
    }
    $index : ($index + 1);
}
```

### 8. Toán tử (+ , -, *, /, %) 

```

button {
  width: 600px / 960px * 100%;
}
```