#!/bin/sh

# SSHサーバーをインストールして起動する
apk add --no-cache openssh-server
echo "root:Docker!" | chpasswd
sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
sed -i 's/#Port 22/Port 2222/' /etc/ssh/sshd_config
ssh-keygen -A
/usr/sbin/sshd &

# コンテナを終了させずに待機させるためのコマンド
# これによりSSHで接続する時間が確保できる
echo "Investigation container started. Waiting for SSH connection..."
tail -f /dev/null