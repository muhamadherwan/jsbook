// FACTORY PATTERN
function MemberFactory() {
  this.createMember = function (name, type) {
    let member;

    if (type === "simple") {
      member = new SimpleMembership(name);
    } else if (type === "standard") {
      member = new StandardMembership(name);
    } else if (type === "premium") {
      member = new PremiumMembership(name);
    }

    // create member type object
    member.type = type;

    // create member define object
    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };
    return member;
  };
}

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = "Rm5";
};

const StandardMembership = function (name) {
  this.name = name;
  this.cost = "RM10";
};

const PremiumMembership = function (name) {
  this.name = name;
  this.cost = "RM15";
};

// USE THE PATTERN
const members = [];
const factory = new MemberFactory();

members.push(factory.createMember("Saito Daigo", "simple"));
members.push(factory.createMember("Ezzi Moralez", "standard"));
members.push(factory.createMember("Chriz Fosberg", "premium"));
members.push(factory.createMember("Nick Talman", "simple"));

// console.log(members);
members.forEach((member) => member.define());
