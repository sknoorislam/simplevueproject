<template>
    <section class="contact py-5" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="address">
                    <h5>Address:</h5>
                    <ul class="list-unstyled">
                        <li> T-Mobile Customer Relations</li>
                        <li> PO Box 37380</li>
                        <li> Albuquerque, NM 87176-7380</li>
                    </ul>
                    <p>Please don't send anything to this address.</p>
                    </div>
                    <div class="email">
                    <h5>Email:</h5>
                    <ul class="list-unstyled">
                        <li> info@email.com</li>
                        <li> info@email.com</li>
                    </ul>
                    </div>
                    <div class="phone">
                        <h5>Phone:</h5>
                        <ul class="list-unstyled">
                        <li> +91- 8800XXXXXX34</li>
                        <li> +91- 8800XXXXXX34</li>
                    </ul>
                    </div>
                    <div class="social">
                    <ul class="list-inline list-unstyled">
                        <li class="list-inline-item">
                            <a href="#"><i class="fa fa-facebook-square fa-2x"></i></a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#"><i class="fa fa-google-plus-square fa-2x"></i></a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#"><i class="fa fa-youtube-play fa-2x"></i></a>
                        </li>
                    </ul>
                </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body p-5">
                            <form>
                                <div class="row g-3">
                                    <div class="form-group col-md-6">
                                        <input id="Full Name" name="Full Name" placeholder="Full Name" class="form-control" type="text">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                                    </div>
                                
                                    <div class="form-group col-md-6">
                                        <input id="Mobile No." name="Mobile No." placeholder="Mobile No." class="form-control" required type="text">
                                    </div>
                                    <div class="form-group col-md-6">
                                            <select id="inputState" class="form-control">
                                                <option selected>Choose ...</option>
                                                <option> New Buyer</option>
                                                <option> Auction</option>
                                                <option> Complaint</option>
                                                <option> Feedback</option>
                                            </select>
                                    </div>
                                    <div class="col-md-12">
                                            <textarea id="comment" name="comment" cols="40" rows="5" placeholder="Your Message" class="form-control"></textarea>
                                    </div>
                                    <div class="col">
                                        <button type="button" class="btn btn-danger">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name : "ContactForm1",
}
</script>
