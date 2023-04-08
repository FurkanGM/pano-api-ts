PROTOC_GEN_TWIRP_BIN="./node_modules/.bin/protoc-gen-twirp_ts"
PROTOC_GEN_TS_BIN="./node_modules/.bin/protoc-gen-ts"
OUT_DIR="./src/protos"

gen:
	@echo "Generating proto files..."
	find src/protos -not -name service.proto -delete
	protoc \
      -I ./src/protos \
      --plugin=protoc-gen-ts=$(PROTOC_GEN_TS_BIN) \
      --plugin=protoc-gen-twirp_ts=$(PROTOC_GEN_TWIRP_BIN) \
      --ts_opt=client_none \
      --ts_opt=generate_dependencies \
      --ts_out=$(OUT_DIR) \
      --twirp_ts_out=$(OUT_DIR) \
      ./src/protos/*.proto