动态添加和删除元素上的类
element.classList.add("active");
element.classList.add("active", "highlighted", "darkMode");
element.classList.remove("active");
element.classList.remove("active", "highlighted", "darkMode");

检查元素是否具有某个类
<div class="activw"></div>
const element = document.querySelector("div");
element.classList.contains("active"); // true
element.classList.contains("highlighted"); // false

您可以使用内置 toggle 方法，添加一个新类或删除现有类：
const box = document.querySelector("div");
box.classList.toggle("active"); // 添加类 active，因为 active 类不存在
box.classList.toggle("active"); // 删除类 active，因为 active 存在
box.classList.toggle("active"); // 添加类actvie,因为 active 类不存在

如果您需要删除某个类名并将其替换为新的类名，您可以使用 2 行：
element.classList.remove("show");
element.classList.add("hidden");
或者
element.classList.replace("show", "hidden");
