#!/bin/bash

if [ "$TITLE" = '' ]; then
  echo "TITLE is empty"
  exit 1
fi

DATE=$(TZ=UTC-9 date '+%Y-%m-%d')

touch contents/posts/$TITLE.md

cat <<EOF >> contents/posts/$TITLE.md
---
path: "/posts/$TITLE"
title: $TITLE
date: $DATE
---

HOGE
YOU CAN CHANGE title:)
EOF

vim ./contents/posts/$TITLE.md
