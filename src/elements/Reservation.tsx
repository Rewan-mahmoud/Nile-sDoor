import SelectPicker from "rsuite/SelectPicker";

const data = [
  "Number Of People",
  "Member 1",
  "Member 2",
  "Member 3",
  "Member 4",
  "Member 5",
].map((item) => ({ label: item, value: item }));

const Reservation = () => {
  return (
    <form action="#">
      <div className="row">
        <div className="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp">
          <div className="input-group input-line">
            <div className="input-group-prepand">
              <i className="flaticon-user"></i>
            </div>
            <input
              name="dzName"
              required
              type="text"
              className="form-control"
              placeholder="الاسم"
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp">
          <div className="input-group input-line">
            <div className="input-group-prepand">
              <i className="flaticon-phone-call"></i>
            </div>
            <input
              name="dzPhoneNumber"
              required
              type="text"
              className="form-control dz-number"
              placeholder=" رقم الهاتف"
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp">
          <div className="input-group input-line">
            <div className="input-group-prepand">
              <i className="flaticon-email-1"></i>
            </div>
            <input
              name="dzEmail"
              required
              type="text"
              className="form-control"
              placeholder=" البريد الالكتروني"
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp">
          <div className="input-group input-line">
            <div className="input-group-prepand">
              <i className="flaticon-two-people"></i>
            </div>
            <SelectPicker
              className="form-select default-select select-option-rsuite"
              defaultValue={"عدد الاشخاص"}
              data={data}
              searchable={false}
            
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp">
          <div className="input-group input-line">
            <div className="input-group-prepand">
              <i className="flaticon-calendar-date"></i>
            </div>
            <input
              required
              type="text"
              className="form-control"
              id="datePickerOnly"
              placeholder="اليوم"
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp">
          <div className="input-group input-line">
            <div className="input-group-prepand">
              <i className="flaticon-clock"></i>
            </div>
            <input
              required
              type="text"
              className="form-control"
              id="timePickerOnly"
              placeholder="الوقت"
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-12 text-center">
          <button
            type="button"
            name="submit"
            value="submit"
            className="btn btn-lg btn-white btn-hover-1"
          >
            <span>اححز طاولة</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Reservation;
