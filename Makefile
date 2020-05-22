# vim: set noet:
CC = emcc
CXX = em++

EXPORTED_FUNCTIONS="['_mid']"

CFLAGS = -O3 -Wall -fPIC --memory-init-file 0
EMCFLAGS = -s ALLOW_MEMORY_GROWTH=1 -s EXPORTED_FUNCTIONS=$(EXPORTED_FUNCTIONS) -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' -s MODULARIZE=1

build:
	${CC} ${CFLAGS} ${EMCFLAGS} src/mid.c -o wasm/mid.js -s BINARYEN_ASYNC_COMPILATION=0;

