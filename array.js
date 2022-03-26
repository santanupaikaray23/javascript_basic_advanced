//Array is the collection of homogenious or hetrigenious data type.

var a = [1,2,3,56,73](Arr of Number)
var b = ['santanu','lucky','wdwdewf','wfefewf'](Array of String)
var c = [true,false,false,true](array of Boolean)

var d = [2,33,'f',45,true,false,'dfdss']

var city = ["BBSR","Delhi","NewYoke","Paris"]
var city = ["BBSR","Delhi","NewYoke","Paris"]
undefined
city[0]
'BBSR'
city[3]
'Paris'
typeof(city[0])
'string'
typeof(city[3])
'string'
city.length
4
city[city.length-1]
'Paris'
city[3]
'Paris'
push:
push always add the value at the end of the array.
var city = ["BBSR","Delhi","NewYoke","Paris"]
undefined
city.push['Bangalore']
undefined
city.push('Bangalore')
5
city
(5) ['BBSR', 'Delhi', 'NewYoke', 'Paris', 'Bangalore']
city.push('Dubai','Venice')
7
city
(7) ['BBSR', 'Delhi', 'NewYoke', 'Paris', 'Bangalore', 'Dubai', 'Venice']

pop:
it always remove last value of the array.
var city = ["BBSR","Delhi","NewYoke","Paris"]
undefined
city.pop()
'Paris'
city
(3) ['BBSR', 'Delhi', 'NewYoke']
city.pop(2)
'NewYoke'
city
(2) ['BBSR', 'Delhi']
city.pop(2)
'Delhi'

->Shift remove the 1st value of the array.
var city = ["BBSR","Delhi","NewYoke","Paris"]
undefined
city.shift()
'BBSR'
city.shify(2)
VM4056:1 Uncaught TypeError: city.shify is not a function
    at <anonymous>:1:6
(anonymous) @ VM4056:1
var city = ["BBSR","Delhi","NewYoke","Paris"]
city.shift(2)
'BBSR'
city.shift(1)
'Delhi'

unshift: add in the begining of the array
city
(2) ['NewYoke', 'Paris']
city.unshift('Delhi')
3
city
(3) ['Delhi', 'NewYoke', 'Paris']
city.unshift('Bangalore')
4

Slice:
var city = ["BBSR","Delhi","NewYoke","Paris"]
undefined
city.slice(1)
(3) ['Delhi', 'NewYoke', 'Paris']
city.slice(2)
(2) ['NewYoke', 'Paris']
city
(4) ['BBSR', 'Delhi', 'NewYoke', 'Paris']
var city = ["BBSR","Delhi","NewYoke","Paris"]
undefined
city.slice(2,5)
(2) ['NewYoke', 'Paris']

splice:
var city = ["BBSR","Delhi","NewYoke","Paris"]
city.splice(2,2)

var a = ['a','b','c','d',1]
var b = [1,2,3]
a+b
'a,b,c,d,11,2,3'

var b = [1,2,3]
a.concat(b)
["a","b","c",1,1,2,3]

indexof:

var city = ["BBSR","Delhi","NewYoke","Paris"]
var city = ["BBSR","Delhi","NewYoke","Paris"]
undefined
city.indexOf('NewYoke')
2
city.indexOf('BBSR')
0
city.indexOf('Bangalore')
-1
city.indexOf('Paris')
3

var a ="hii"
undefined
var b = ['hi']
undefined
Array.isArray(a)
false
Array.isArray(b)
true

sorting:

var city = ["BBSR","Delhi","NewYoke","Paris"]
city.sort()
(4) ['BBSR', 'Delhi', 'NewYoke', 'Paris']

var city = ["BBSR","Delhi",1,2,2,false,true,agra,"NewYoke",'delhi',"Paris"]

var myarray = ["BBSR","Delhi",['Red',["Bmw","Audi","Skoda"],'Blue','Green'],"NewYoke","Paris"]