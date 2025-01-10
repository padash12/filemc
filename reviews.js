        document.querySelectorAll('.reply-button, .reply-button1').forEach(button => {
                        button.addEventListener('click', function() {
                            const reviewId = this.getAttribute('data-review-id');
                            const replyFormId = this.classList.contains('reply-button') ? `reply-form-${reviewId}` : `reply-form1-${reviewId}`;
                            const replyForm = document.getElementById(replyFormId);
                            replyForm.style.display = replyForm.style.display === 'none' ? 'block' : 'none';
                        });
                    });