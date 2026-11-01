#!/bin/python3

 # This file is part of Translation Aid
 #
 # Copyright (C) 2026 - NAGY, Gábor
 #
 #  This program is free software; you can redistribute it and/or modify
 #  it under the terms of the GNU Library General Public License as published by
 #  the Free Software Foundation; either version 3 of the License, or
 #  (at your option) any later version.
 #
 #  This program is distributed in the hope that it will be useful,
 #  but WITHOUT ANY WARRANTY; without even the implied warranty of
 #  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 #  GNU Library General Public License for more details.
 #
 #  You should have received a copy of the GNU Library General Public License
 #  along with this program. If not, see <https://www.gnu.org/licenses/>.

import sys,os
import subprocess

mediatorSrc="""
 # This file is part of Translation Aid
 #
 # Copyright (C) 2026 - NAGY, Gabor
 #
 #  This program is free software; you can redistribute it and/or modify
 #  it under the terms of the GNU Library General Public License as published by
 #  the Free Software Foundation; either version 3 of the License, or
 #  (at your option) any later version.
 #
 #  This program is distributed in the hope that it will be useful,
 #  but WITHOUT ANY WARRANTY; without even the implied warranty of
 #  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 #  GNU Library General Public License for more details.
 #
 #  You should have received a copy of the GNU Library General Public License
 #  along with this program. If not, see <https://www.gnu.org/licenses/>.

import sys, os, json
from googletrans import Translator
import argostranslate.translate

def sendMessage(msg):
	res=json.dumps(msg).encode('utf-8')
	sys.stdout.buffer.write(len(res).to_bytes(4,'little')+res)
	sys.stdout.buffer.flush()
	

def transWithGoogle(query):
	result = Translator().translate(query["text"], src=query["srcLang"], dest=query["trgLang"])
	msg={"srcLang":query["srcLang"],"trgLang":query["trgLang"],"trdText":result.text}
	sendMessage(msg)

def getQuery():
	lenght=int.from_bytes(sys.stdin.buffer.read(4),'little')
	if not lenght:
		return None
	query=sys.stdin.buffer.read(lenght).decode()
	return json.loads(query)

def transWithArgos(query):
	try:
		result=argostranslate.translate.translate(query["text"],query["srcLang"], query["trgLang"])
	except:
		result="An error occurred! Could it be that the source or target language is not installed?"
	finally:
		msg={"srcLang":query["srcLang"],"trgLang":query["trgLang"],"trdText":result}
		sendMessage(msg)
	

if __name__ == "__main__":
	query=getQuery()

	if "translator" in query and "srcLang" in query and "trgLang" in query and "text" in query:
		match query["translator"]:
			case "google":
				transWithGoogle(query)
			case "argos":
				transWithArgos(query)
			case _:
				sendMessage('{"error"":"Translator not found"}')
	else:
		sendMessage({"error":"The received data is incorrect or incomplete."})
"""

natHost="""
  "name": "com.github.ihlet.translation_aid",
  "description": "The native app of Translation Aid.",
  "path": "{path}",
  "type": "stdio",
  "allowed_origins": ["chrome-extension://{id}/"]
"""

argosLangs={
"translate-sq_en",
"translate-ar_en",
"translate-az_en",
"translate-eu_en",
"translate-bn_en",
"translate-bg_en",
"translate-ca_en",
"translate-zt_en",
"translate-zh_en",
"translate-cs_en",
"translate-da_en",
"translate-nl_en",
"translate-en_sq",
"translate-en_ar",
"translate-en_az",
"translate-en_eu",
"translate-en_bn",
"translate-en_bg",
"translate-en_ca",
"translate-en_zh",
"translate-en_zt",
"translate-en_cs",
"translate-en_da",
"translate-en_nl",
"translate-en_eo",
"translate-en_et",
"translate-en_fi",
"translate-en_fr",
"translate-en_gl",
"translate-en_de",
"translate-en_el",
"translate-en_he",
"translate-en_hi",
"translate-en_hu",
"translate-en_id",
"translate-en_ga",
"translate-en_it",
"translate-en_ja",
"translate-en_ko",
"translate-en_ky",
"translate-en_lv",
"translate-en_lt",
"translate-en_ms",
"translate-en_nb",
"translate-en_fa",
"translate-en_pl",
"translate-en_pt",
"translate-en_pb",
"translate-en_ro",
"translate-en_ru",
"translate-en_sk",
"translate-en_sl",
"translate-en_es",
"translate-en_sw",
"translate-en_sv",
"translate-en_tl",
"translate-en_th",
"translate-en_tr",
"translate-en_uk",
"translate-en_ur",
"translate-en_vi",
"translate-eo_en",
"translate-et_en",
"translate-fi_en",
"translate-fr_en",
"translate-gl_en",
"translate-de_en",
"translate-el_en",
"translate-he_en",
"translate-hi_en",
"translate-hu_en",
"translate-id_en",
"translate-ga_en",
"translate-it_en",
"translate-ja_en",
"translate-ko_en",
"translate-ky_en",
"translate-lv_en",
"translate-lt_en",
"translate-ms_en",
"translate-nb_en",
"translate-fa_en",
"translate-pl_en",
"translate-pb_en",
"translate-pt_en",
"translate-pt_es",
"translate-ro_en",
"translate-ru_en",
"translate-sk_en",
"translate-sl_en",
"translate-es_en",
"translate-es_pt",
"translate-sw_en",
"translate-sv_en",
"translate-tl_en",
"translate-th_en",
"translate-tr_en",
"translate-uk_en",
"translate-ur_en",
"translate-vi_en"
}

if __name__=="__main__":
	pythonVersion=sys.version.split(".")
	assert int(pythonVersion[0])==3 and int(pythonVersion[1])>=10, "The Python version must be 3.10 or higher!"
	
	if(sys.platform=='win32' and str(os.getcwd().isascii())==False):
		print("\nThe installer's path contains only ASCII characters. Move the folder to a location where the path consists solely of ASCII characters, then restart the installation.\n")
		input("Press Enter to exit.")
		exit()

	BID=str()
	while(True):
		BID=input("Please provide the ID of this extension: ").strip()
		if BID==input("Re-enter the ID for this extension: ").strip():
			break
		else:
			print("The two identifiers do not match! Please try again.")

	if(sys.platform=='linux'):
		try:
			subprocess.run(['python3','-m','venv','native'],check=True)
		except Exception as error:
			print("\n{}\n".format(error))
			input("Press Enter to exit.")
			exit()
		with open("native/mediator.py","w") as f:
			f.write("#!{}/native/bin/python3".format(os.getcwd()))
			f.write(mediatorSrc)
		try:
			subprocess.run("chmod +x {}".format(os.path.join(os.getcwd(),"native/mediator.py")), shell=True, check=True)
		except Exception as error:
			print("\n{}\n".format(error))
			input("Press Enter to exit.")
			exit()
		with open(os.path.join(os.environ.get('HOME'),".config/google-chrome/NativeMessagingHosts/com.github.ihlet.translation_aid.json"),"w") as f:
			f.write("{")
			f.write(natHost.format(id=BID,path=os.getcwd()+"/native/mediator.py"))
			f.write("}")
		try:
			subprocess.run(['./native/bin/python3','./native/bin/pip3','install', 'argostranslate'], check=True)
			#os.system('./native/bin/python3 ./native/bin/pip3 install googletrans==4.0.0rc1')
			subprocess.run(['./native/bin/python3','./native/bin/pip3','install', 'googletrans==4.0.0rc1'], check=True)
		except Exception as error:
			print("\n{}\n".format(error))
			input("Press Enter to exit.")
			exit()
		instdLangs=subprocess.run(["./native/bin/python3","./native/bin/argospm","list"], capture_output=True, check=True).stdout.decode().split("\n")
		instdLangs=set(instdLangs)
		argosLangs=argosLangs.difference(instdLangs)
		notInstLangs=set()
		for x in argosLangs:
			try:
				print(f"Installation of {x}")
				subprocess.run(['./native/bin/python3','./native/bin/argospm','install',f'{x}'], check=True)
			except:
				notInstLangs.add(x)
		if(len(notInstLangs)>0):
			print("\nError! The following language packs could not be installed:")
			for y in notInstLangs:
				print(y)
		print("\nInstallation complete!\n")

	elif(sys.platform=='win32'):
		argosPackDir=os.path.join(os.getcwd(),"native\\ArgosPackages")
		try:
			subprocess.run(['python','-m','venv','native'], shell=False, check=True)
		except Exception as error:
			print("\n{}\n".format(error))
			input("Press Enter to exit.")
			exit()
		with open("native\\mediator.py","w") as f:
			f.write(mediatorSrc)
		with open("native\\mediator.bat","w") as f:
			f.write("@echo off\n")
			f.write('set ARGOS_PACKAGES_DIR={}\n'.format(argosPackDir))
			f.write('"Scripts\\python.exe" "mediator.py" %*')
		with open("native\\com.github.ihlet.translation_aid.json","w") as f:
			f.write("{")
			f.write(natHost.format(id=BID,path=os.path.join(os.getcwd(),"native\\mediator.bat").replace("\\","\\\\")))
			f.write("}")
		try:
			subprocess.run(['REG','ADD','HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts\\com.github.ihlet.translation_aid','/ve','/t','REG_SZ','/d',os.path.join(os.getcwd(),"native\\com.github.ihlet.translation_aid.json"),'/f'], shell=True, check=True)
			subprocess.run([os.path.join(os.getcwd(),'native\\Scripts\\pip.exe'),'install','argostranslate'], shell=True, check=True)
			subprocess.run([os.path.join(os.getcwd(),'native\\Scripts\\pip.exe'),'install','googletrans==4.0.0rc1'], shell=True, check=True)
		except Exception as error:
			print("\n{}\n".format(error))
			input("Press Enter to exit.")
			exit()
		os.environ["ARGOS_PACKAGES_DIR"]=argosPackDir
		if(os.path.exists(argosPackDir)==False):	
			os.mkdir(argosPackDir)
		instdLangs=subprocess.run([os.path.join(os.getcwd(),'native\\Scripts\\argospm.exe'),'list'], shell=True, check=True,capture_output=True).stdout.decode().split("\n")
		for x in range(len(instdLangs)):
			instdLangs[x]=instdLangs[x].strip()
		instdLangs=set(instdLangs)
		argosLangs=argosLangs.difference(instdLangs)
		notInstLangs=set()
		for x in argosLangs:
			try:
				print(f"Installation of {x}")
				subprocess.run([os.path.join(os.getcwd(),"native\\Scripts\\argospm.exe"),'install',x], shell=True, check=True)
			except:
				notInstLangs.add(x)
		if(len(notInstLangs)>0):
			print("\nError! The following language packs could not be installed:")
			for y in notInstLangs:
				print(y)
		print("\nInstallation complete!\n")
	else:
		print("This installator does not support your platform.")
	input("Press Enter to exit.")



		

		
			
		
