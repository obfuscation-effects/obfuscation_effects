# pdg生成的方式
- esprima生成ast结点
- 以statement拆成森林作为cfg
- 添加数据引用作为pdg

## 发现的问题
`
x = a;
x = x + 2;
`
这样的代码会缺失第一行x和第二行x的关联
## 原因
对于赋值语句先左后右处理，导致左x更新了原本第一行的全局x参数，而处理右边查询的时候只查询到了最新的x
## 修改方式
修改为先右后左的处理方式

# ngram特征提取
- pdg结点树中序遍历（貌似不是简单的遍历，还添加了额外的信息），去除叶子结点
- 然后滑动窗口获得ngram