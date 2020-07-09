import {
  addSerializers,
  minimalNative
} from "@tcn/jest-serializer";
import shared from "../shared";

addSerializers(expect, minimalNative);

shared();
