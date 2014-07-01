#!/bin/bash
pm2 start pm2-worker.js -i 3 --name worker
