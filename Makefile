PROTOC_GEN_TWIRP_BIN="./node_modules/.bin/protoc-gen-twirp_ts"
PROTOC_GEN_TS_BIN="./node_modules/.bin/protoc-gen-ts_proto"
OUT_DIR="./protos"

gen:
	@echo "Generating proto files..."
	find protos -not -name service.proto -delete
	protoc \
        -I ./protos \
        --plugin=protoc-gen-ts_proto=${PROTOC_GEN_TS_BIN} \
        --plugin=protoc-gen-twirp_ts=${PROTOC_GEN_TWIRP_BIN} \
        --ts_proto_opt=esModuleInterop=true \
        --ts_proto_opt=outputClientImpl=false \
        --ts_proto_out=${OUT_DIR} \
        --twirp_ts_opt="ts_proto" \
        --twirp_ts_out=${OUT_DIR} \
        ./protos/*.proto
