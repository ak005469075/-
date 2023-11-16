#测试代理ip可用性
import requests
from lxml import etree

# def get_url(page):
#  url ='https://ip.ihuan.me/address/5Lit5Zu9.html?page='+ page
#  html = requests.get(url).text

#  html = etree.HTML(html)
#  result = html.xpath('//td[2]/text()')
#  result2 = html.xpath('//td/a[@target="_blank"]/text()')

# for a,b in zip(result2,result):
#  PORT = b
#  IP = a
#  DL =(a +':'+b)
# with open ('DL.txt','a')as f:
#  f.write(DL +"\n")


def check(DL):
    url ='http://%s'% DL.rstrip()
    try:
      result = requests.get(url,timeout=5)
      print(DL +"可用")
      with open ('E:\\渗透\\proxypool\\DL.txt','a+')as f:
         f.write(url+"\n")
    except:
      print('不可用')


# lists =['5crfe930','4ce63706','b97827cc']
# for i in lists:
#  get_url(i)

with open('E:\\渗透\\proxypool\\1.txt','r')as F:
    Str= F.readlines()
    for DL in Str:
       check(DL)
