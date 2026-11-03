#!/bin/python3

"""
 * This file is part of Translation Aid
 *
 * Copyright (C) 2026 - NAGY, Gábor
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU Library General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Library General Public License for more details.
 *
 *  You should have received a copy of the GNU Library General Public License
 *  along with this program. If not, see <https://www.gnu.org/licenses/>.
 """

import sys,os

def rmDirRecursive(parentDir):
	if(os.path.exists(parentDir)==False):
		raise FileNotFoundError('Not found this directory: {}'.format(parentDir))
	for root, dirs, files in os.walk(parentDir, topdown=False):
		for name in files:
			os.remove(os.path.join(root, name))
		for name in dirs:
			if(os.path.islink(os.path.join(root, name))):
				os.remove(os.path.join(root, name))
			else:
				os.rmdir(os.path.join(root, name))
	os.rmdir(parentDir)


if __name__=="__main__":
	pythonVersion=sys.version.split(".")
	assert int(pythonVersion[0])==3 and int(pythonVersion[1])>=10, "The Python version must be 3.10 or higher!"
	while(True):
		res=input("Are you sure you want to uninstall the native component of the Translation Aid browser extension? (y/n): ")
		if(res=='y' or res=="yes"):
			break
		elif(res=='n' or res=="no"):
			exit()
	if(sys.platform=='linux'):
		delArgos=False
		while(True):
			res=input("Do you want to delete the Argos Translate files? (y/n): ")
			if(res=='y' or res=="yes"):
				delArgos=True	
				break
			elif(res=='n' or res=="no"):
				delArgos=False
				break
		try:
			os.remove(os.path.join(os.environ.get('HOME'),".config/google-chrome/NativeMessagingHosts/com.github.ihlet.translation_aid.json"))
		except Exception as error:
			print(error)
		try:
			rmDirRecursive("native")
		except Exception as error:
			print(error)
		if(delArgos):
			try:
				rmDirRecursive(os.path.join(os.environ.get('HOME'),".local/share/argos-translate"))
			except Exception as error:
				print(error)
			try:
				rmDirRecursive(os.path.join(os.environ.get('HOME'),".local/cache/argos-translate"))
			except Exception as error:
				print(error)
		print("\nUninstallation complete!\n")
			
	elif(sys.platform=='win32'):
		try:
			rmDirRecursive(os.path.join(os.getcwd(),"native"))
		except FileNotFoundError as error:
			print(error)
			print("\nUninstallation failed!\n")
			input("Press Enter to exit.")
			exit()
		os.system('REG delete "HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts\\com.github.ihlet.translation_aid"')
		print("\nUninstallation complete!\n")
		input("Press Enter to exit.")
	else:
		print("This uninstallator does not support your platform.")
		
