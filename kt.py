from selenium import webdriver
import sys
import time

start = time.time()

# chromedriver option 설정
print("setting option", end="")
options = webdriver.ChromeOptions()
options.add_argument('headless')
options.add_argument('window-size=1600x2400')
options.add_argument("disable-gpu")# == options.add_argument("--disable-gpu")
print("time :", time.time() - start, end="") 

# starting ChromeDriver
print("starting ChromeDriver")
driver = webdriver.Chrome('./driver/chromedriver', chrome_options=options)
print("time :", time.time() - start, end="")

# kt membership main
print("loading KT")
driver.get('https://membership.kt.com/discount/partner/PartnerList.do')

for cate in driver.find_elements_by_css_selector("#cate > li > a")[1:]:
    print (cate.text)
    