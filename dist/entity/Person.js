"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const typeorm_1 = require("typeorm");
let Person = class Person {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Person.prototype, "Id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Person.prototype, "Dni", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Person.prototype, "EarlyBirthAmount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Person.prototype, "Email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Person.prototype, "FirstName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Person.prototype, "Gender", void 0);
__decorate([
    typeorm_1.Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Person.prototype, "JoinDate", void 0);
__decorate([
    typeorm_1.Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Person.prototype, "LastLogin", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Person.prototype, "LastName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Person.prototype, "LocationId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Person.prototype, "Mobile", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Person.prototype, "Phone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Person.prototype, "RoleId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Person.prototype, "sponsorId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Person.prototype, "Status", void 0);
Person = __decorate([
    typeorm_1.Entity()
], Person);
exports.Person = Person;
